const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


//GET
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    SELECT * FROM "user_custom"
      WHERE "user_id" = $1
      ORDER BY "id" ASC;
    `;
  const sqlValues = [req.user.id]

  pool.query(sqlQuery, sqlValues)
  .then((result) => {
    res.send(result.rows)
  })
  .catch((error) => {
    console.log('error fetching usercustom', error)
    res.sendStatus(500);
  })
})

//POST single user custom item
router.post('/add,', rejectUnauthenticated, (req, res) => {
  const customPackQuery = `
  INSERT INTO "user_custom" 
    ("user_id", "required", "weight", "pack_note", "gear_note", "name", "category_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7)
`;
const sqlValues = [
  req.user.id, req.body.required, req.body.weight, req.body.pack_note, 
  req.body.gear_note, req.body.name, req.body.category_id
  ];

})

//POST
router.post('/', rejectUnauthenticated, (req, res) => {
  // console.log(req.body)
  // console.log(req.user)
  packToSave = req.body.currentPack //is Array of Objects
  chosenPack = req.body.chosenPack //is Object
  const d = new Date();

  //first post the user and chosenpack data to create user Trip
  const sqlValues1 = [req.user.id, chosenPack.id, chosenPack.pack_name, d.toLocaleDateString()]
  // console.log(sqlValues1)
  const createTripQuery = `
    INSERT INTO "headouts" ("user_id", "pack_id", "trip_name", "trip_date")
      VALUES ($1, $2, $3, $4)
      RETURNING "id";
    `; //return from that query the tripID
  pool.query(createTripQuery, sqlValues1)
  .then((result) => {
    const tripID = result.rows[0].id
    //then loop through currentPack
    //for each row item, INSERTINTO usercustom
    for (let item of packToSave){
      if (item.gear_id) {
        const customPackQuery = `
          INSERT INTO "user_custom" 
            ("user_id", "category_id", "trip_id", "name", "weight", "gear_id")
          VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const customPackValues = [req.user.id, item.category_id, tripID, item.name, item.weight, item.gear_id]
        pool.query(customPackQuery, customPackValues)
          // .then(() => res.sendStatus(201))
          // .catch((error) => res.sendStatus(500))
      } else {
        const customPackQuery = ` 
          INSERT INTO "user_custom" 
            ("user_id", "category_id", "trip_id", "name", "weight", "consumable_id")
          VALUES ($1, $2, $3, $4, $5, $6)
          `;
        const customPackValues = [req.user.id, item.category_id, tripID, item.name, item.weight, item.consumable_id]
        pool.query(customPackQuery, customPackValues)
          // .then(() => res.sendStatus(201))
          // .catch((error) => res.sendStatus(500))
      }
    }
    // res.sendStatus(201)
  })
  .catch((error) => {
    console.log('error POSTing new Trip ID', error);
    res.sendStatus(500);
  });
});


//PUT
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // console.log('you have reached usercustom PUT')
  const sqlQuery = `
    UPDATE "user_custom"
    SET "weight"=$1, "gear_note"=$2, "pack_note"=$3
    WHERE "id"=$4;`;
  console.log(req.body)
    const sqlValues = [req.body.weight, req.body.gear_note, req.body.pack_note, req.body.id]
  
  pool.query(sqlQuery, sqlValues)
  .then(() => res.sendStatus(200))
  .catch((error) => {
    console.log('Issue updating usercustom gear data', error);
  })
})

//DELETE
// router.delete('/:id', rejectUnauthenticated, (req, res) => {
//   const sqlQuery = `
//     DELETE FROM "user_custom"
//     WHERE "trip_id"=$1
//   `;
  
//   pool.query(sqlQuery, [req.params.id])
//   .then(() => res.sendStatus(202))
//   .catch((error) => {
//     console.log('Issue deleting items from usercustom', error)
//   })
// })

module.exports = router;