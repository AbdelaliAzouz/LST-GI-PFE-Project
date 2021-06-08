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
  var sql = "CREATE TABLE `login` ( `id` INT NOT NULL AUTO_INCREMENT , `email-institu` VARCHAR(255) NOT NULL , `mot-de-passe` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

