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
  
})

//DELETE

module.exports = router;