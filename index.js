const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');
const url = require('url');

const con = mysql.createConnection({
  host: "sql108.infinityfree.com",
  user: "if0_34564036",
  password: "k3L4MlyXptqSk",
  database: "if0_34564036_Users"
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
