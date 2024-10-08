const express = require("express");

const https = require("https");
const qs = require("querystring");

const checksum_lib = require("./paytm/checksum");
const config = require("./paytm/config");

const app = express();

const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });

// app.get('/', function (req, res) {
//     res.send('Hello World');
//  })
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/paynow.html");
  });
//   app.get("/paynow", (req, res) => {
//     res.json({
//         "message":"bhjgbjh",
//         "code":78798
//     })
//   });
app.post("/paynow", [parseUrl, parseJson], (req, res) => {
    // Route for making payment
  
    var paymentDetails = {
        amount: req.body.amount,
        customerId: req.body.name,
        customerEmail: req.body.email,
        customerPhone: req.body.phone
    }
  if(!paymentDetails.amount || !paymentDetails.customerId || !paymentDetails.customerEmail || !paymentDetails.customerPhone) {
      res.status(400).send('Payment failed')
  } else {
      var params = {};
      params['MID'] = config.PaytmConfig.mid;
      params['WEBSITE'] = config.PaytmConfig.website;
      params['CHANNEL_ID'] = 'WEB';
      params['INDUSTRY_TYPE_ID'] = 'Retail';
      params['ORDER_ID'] = 'TEST_'  + new Date().getTime();
      params['CUST_ID'] = paymentDetails.customerId;
      params['TXN_AMOUNT'] = paymentDetails.amount;
      params['CALLBACK_URL'] = 'http://localhost:4000/callback';
      params['EMAIL'] = paymentDetails.customerEmail;
      params['MOBILE_NO'] = paymentDetails.customerPhone;
  
  
      checksum_lib.genchecksum(params, config.PaytmConfig.key, function (err, checksum) {
          var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
          // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
  
          var form_fields = "";
          for (var x in params) {
              form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
          }
          form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";
  
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
          res.end();
      });
  }
  });
 
 

// Init the server
var server = app.listen(process.env.PORT || 4000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);

});