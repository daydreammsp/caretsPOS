
router.get('/', (req, res) => {
    const express = require('express');
    const pool = require('../modules/pool');
    const router = express.Router();
    let request = require("request");

    let options = { method: 'GET',
      url: 'https://connect.squareup.com/v2/locations/R8N1BZ6353R5P/transactions',
      qs: 
       { begin_time: '2016-01-15T00:00:00Z',
         end_time: '2019-01-31T00:00:00Z' },
      headers: 
       { 'Postman-Token': 'ff037b4d-8476-e871-fa38-3f7c5a17d823',
         'Cache-Control': 'no-cache',
         Accept: 'application/json',
         Authorization: 'Bearer sq0atp--xOe6YM9OchfFi_-1UURRw',
         'Content-Type': 'application/json' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
      res.send(body)
    });
    })

    module.exports = router;