const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
let request = require("request");



router.get('/get', (req, res) => {
    const express = require('express');
    const pool = require('../modules/pool');
    const router = express.Router();
    let request = require("request");

    let options = { method: 'GET',
      url: 'https://connect.squareup.com/v2/locations/CBASEGcVZgUKS8RbqdkU-YjiBxggAQ/transactions',
      qs: 
       { begin_time: '2016-01-15T00:00:00Z',
         end_time: '2019-01-31T00:00:00Z' },
      headers: 
       { 
         'Cache-Control': 'no-cache',
         Accept: 'application/json',
         Authorization: 'Bearer sandbox-sq0atb-ffNvoCsEpPIf8cJyXHELlw',
         'Content-Type': 'application/json' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
      
      res.send(body)
    });
    })

    router.post('/', (req, res) => {
        let randomNum = Math.floor(Math.random() * 1000);
        console.log(req.body.amount)
        let totalAmount = parseInt(req.body.amount)
        var options = { method: 'POST',
          url: 'https://connect.squareup.com/v2/locations/CBASEGcVZgUKS8RbqdkU-YjiBxggAQ/checkouts',
          headers: 
           { 
             'Cache-Control': 'no-cache',
             Accept: 'application/json',
             Authorization: 'Bearer sandbox-sq0atb-ffNvoCsEpPIf8cJyXHELlw',
             'Content-Type': 'application/json' },
          body: 
           { idempotency_key: '86ae1696-b1e3-4328-af6d-f1e04d947a23442989' + randomNum ,
             order: 
              { reference_id: 'reference_id',
                line_items: 
                 [ { name: 'Printed T Shirt',
                     quantity: '1',
                     base_price_money: { amount: totalAmount, currency: 'USD' },
                //      discounts: 
                //       [ { name: '7% off previous season item', percentage: '7' },
                //         { name: '$3 off Customer Discount',
                //           amount_money: { amount: 300, currency: 'USD' } } ] },
                //    { name: 'Slim Jeans',
                //      quantity: '1',
                //      base_price_money: { amount: 2500, currency: 'USD' } },
                //    { name: 'Woven Sweater',
                //      quantity: '3',
                //      base_price_money: { amount: 3500, currency: 'USD' },
                //      discounts: 
                //       [ { name: '$11 off Customer Discount',
                //           amount_money: { amount: 1100, currency: 'USD' } } ],
                     taxes: [ { name: 'Fair Trade Tax', percentage: '5' } ] } ],
                // discounts: 
                //  [ { name: 'Father\'s day 12% OFF', percentage: '12' },
                //    { name: 'Global Sales $55 OFF',
                //      amount_money: { amount: 5500, currency: 'USD' } } ],
                // taxes: [ { name: 'Sales Tax', percentage: '8.5' } ]
             },
            //  ask_for_shipping_address: true,
            //  merchant_support_email: 'merchant+support@website.com',
            //  pre_populate_buyer_email: 'example@email.com',
            //  pre_populate_shipping_address: 
            //   { address_line_1: '1455 Market St.',
            //     address_line_2: 'Suite 600',
            //     locality: 'San Francisco',
            //     administrative_district_level_1: 'CA',
            //     postal_code: '94103',
            //     country: 'US',
            //     first_name: 'Jane',
            //     last_name: 'Doe' },
             redirect_url: 'http://localhost:3000/AddProduct' },
          json: true };
        
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
        
          console.log(body);
          
        res.send(body.checkout.checkout_page_url)
        });
        })

    module.exports = router;