var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("msnodesqlv8");

    // config for your database
    var connectionStr = "Driver={SQL Server Native Client 11.0};Server=JAMUS\\SQLExpress;Database=Node;Uid=admin1;Pwd=forestgate;";

    // connect to your database
    sql.open(connectionStr, function (err, conn) {
    
        if (err) console.log(err);

        // query to the database and get the records
        conn.query('select * from Studentinfo', function (err, rows) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(rows);
            
            // Close the connection when done
            conn.close();
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
