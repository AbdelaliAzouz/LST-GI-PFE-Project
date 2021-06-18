var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pfe_database"
});


// con.query("DROP TABLE admin");
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE admin ( `id` INT(255) NOT NULL AUTO_INCREMENT , `nomAdmin` VARCHAR(255) NOT NULL , `prenomAdmin` VARCHAR(255) NOT NULL , `emailAdmin` VARCHAR(255) NOT NULL , `mdpAdmin` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`));";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
});