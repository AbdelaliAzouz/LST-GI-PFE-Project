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
  var sql = "CREATE TABLE `enseignant` ( `id` INT NOT NULL AUTO_INCREMENT , `nom` VARCHAR(255) NOT NULL , `prenom` VARCHAR(255) NOT NULL , `email_institu` VARCHAR(255) NOT NULL , `mot_de_passe` VARCHAR(255) NOT NULL , `etablissement` VARCHAR(255) NOT NULL , `departement` VARCHAR(255) NOT NULL , `discipline` VARCHAR(255) NOT NULL , `thematique` VARCHAR(255) NOT NULL , `labo` VARCHAR(255) NOT NULL , `grade` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});