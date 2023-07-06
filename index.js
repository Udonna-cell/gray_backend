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
    res.setHeader('Content-Type', 'application/json');

    let q = url.parse(req.url, true).query;
    let email = q.email;
    let password =  q.password;
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        let sql = `INSERT INTO user (email, password) VALUES ('${email}','${password}')`;

        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          res.end(JSON.stringify({ email: email, password : password }));
        });
      });
})


app.get('/create_table', (req, res)=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        let sql = `CREATE TABLE user (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255),
            password VARCHAR(255)
        )`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created!");
          res.end(JSON.stringify({ b: 1 }));
        });
      });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
