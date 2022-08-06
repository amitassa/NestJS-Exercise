const sqlite3 = require('sqlite3').verbose();

let sql;

const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE, (err)=>{
    if (err) return console.error(err.message);
    console.log('connection successful');
});

// create table

// sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY, first_name, last_name, username, password)'
// db.run(sql)

// drop table
// db.run("DROP TABLE users")
// db.close();

// insert data into table

// sql = 'INSERT INTO users (first_name, last_name, username, password) VALUES (?,?,?,?)'
// db.run(sql, ["amit", "assa", "kingston", "12345"], (err) => {
//     if (err) return console.error(err.message);
// })


// update 

// sql = 'UPDATE users SET first_name = ? WHERE id = ?';
// db.run(sql, ["Jake", 1], (err)=>{
//     if (err) return console.error(err.message);
// });

// Delete

sql = 'DELETE FROM users WHERE id = ?';
db.run(sql, [1], (err)=>{
    if (err) return console.error(err.message);
});

// print rows

sql = 'SELECT * FROM users'
db.all(sql, [], (err, rows) =>{
    if (err) return console.error(err.message)
    rows.forEach((row) =>{
        console.log(row)
    })
})