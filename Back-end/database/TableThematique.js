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
    var sql = "CREATE TABLE `thematique` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `nomThematique` VARCHAR(255) NOT NULL ,`etablissement` VARCHAR(255) NOT NULL , `laboequipe` VARCHAR(255) NOT NULL , `chercheur` VARCHAR(255) NOT NULL ,PRIMARY KEY (`id`));";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});