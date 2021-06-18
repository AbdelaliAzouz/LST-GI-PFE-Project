var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pfe_database"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE `structure_recherche` ( `id` INT(255) NOT NULL AUTO_INCREMENT , `nomStructure` VARCHAR(255) NOT NULL ,`responsable` VARCHAR(255) NOT NULL , `listeMembres` VARCHAR(255) NOT NULL , `typeStructure` VARCHAR(255) NOT NULL , `nombreMembres` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`));";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});