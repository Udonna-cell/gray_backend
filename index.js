const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');

const con = mysql.createConnection({
//      MYSQL_URL
// mysql://root:880vsQ3l9A1tGvy7lh3E@containers-us-west-146.railway.app:7820/railway
//     MYSQLDATABASE
//     *******
//     MYSQLHOST
//     *******
//     MYSQLPASSWORD
//     880vsQ3l9A1tGvy7lh3E
//     MYSQLPORT
//     7820
//     MYSQLUSER
//     root



  host: "containers-us-west-146.railway.app",
  user: "root",
  password: "880vsQ3l9A1tGvy7lh3E",
  database: "railway"
});







app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/add', (req, res)=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (id, email, password) VALUES (1, 'oray@gmail.com','dog676')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          res.send('1 record inserted')
        });
      });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



