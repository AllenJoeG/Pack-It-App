const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  pool
  .query (`SELECT * FROM "categories";`) 
  .then ((results) => res.send(results.rows))
  .catch ((error) => {
    console.log ('ERROR SELECTING FROM "ITEM"', error)
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = categoriesRouter;
