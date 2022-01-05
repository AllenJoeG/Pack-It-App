const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


//GET
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    SELECT * FROM "headouts"
      WHERE "user_id" = $1
    `;
  const sqlValues = [req.user.id]

  pool.query(sqlQuery, sqlValues)
  .then((result) => {
    res.send(result.rows)
  })
  .catch((error) => {
    console.log('error fetching headouts', error)
    res.sendStatus(500);
  })
})

//POST

//PUT
router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('you have reached headouts PUT')
  const sqlQuery = `
    UPDATE "headouts"
    SET "trip_name"=$1, "trip_notes"=$2
    WHERE "id"=$3;`;
  console.log(req.body)
    const sqlValues = [req.body.trip_name, req.body.trip_notes, req.body.id]
  
  pool.query(sqlQuery, sqlValues)
  .then(() => res.sendStatus(200))
  .catch((error) => {
    console.log('Issue updated trip data', error);
  })
})


//DELETE
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    DELETE FROM "user_custom"
    WHERE "trip_id"=$1
  `;
  pool.query(sqlQuery, [req.params.id])
  .then(() => res.sendStatus(202))
    
  //Once the row items are deleted we can delete the corresponding trip
    const sqlQuery2 = `
      DELETE FROM "headouts"
      WHERE "id"=$1
    `;
    pool.query(sqlQuery2, [req.params.id])
    .then(() => {
      console.log('succesfully deleted trip entry')
    })
    .catch((error) => {
      console.log('Issue deleting trip from headouts', error)
    })

  //Catch for 1st query.
  .catch((error) => {
    console.log('Issue deleting items from usercustom', error)
  })
})

module.exports = router;