//Costing Project 101
var AWS = require('aws-sdk');
exports.handler = (event, context, callback) => {
var rds = new AWS.RDS();
var params = {
    DBInstanceIdentifier: "yourDBinstance"
  };
  rds.stopDBInstance(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else 
        console.log(data);           // successful response
  });
  callback(null, 'done');
};

 
