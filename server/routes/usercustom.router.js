const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


//GET
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    SELECT * FROM "user_custom"
      WHERE "user_id" = $1
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
    `;
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
  //return from that query the tripID

  
})


//PUT

//DELETE

module.exports = router;