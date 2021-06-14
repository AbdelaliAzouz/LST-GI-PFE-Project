/* const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const { response } = require('express')
const saltRounds = 10

//Create connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"pfe_database"
})

//middlewares
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

//la fonction d'envoie les informations de l'doctorant à la base de donées
app.post("/api/insertDoc", (req, res) => {

    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email_institu = req.body.email_institu;  
    const mot_de_passe = req.body.mot_de_passe;     //this password should be encrypted
    const directeur_these = req.body.directeur_these;
    const encadrant = req.body.encadrant;
    const etablissement = req.body.etablissement;
    const departement = req.body.departement;
    const discipline = req.body.discipline;
    const thematique = req.body.thematique;
    const labo = req.body.labo;

    bcrypt.hash(mot_de_passe, saltRounds, (err, hash) => {

        if(err){
            console.log(err)
        }

    const sqlInsertt = "INSERT INTO doctorant ( nom, prenom, email_institu, mot_de_passe, directeur_these, encadrant, etablissement, departement, discipline, thematique, labo ) VALUES (?,?,?,?,?,?,?,?,?,?,?) "
    db.query(sqlInsertt, [nom, 
        prenom, 
        email_institu, 
        hash, 
        directeur_these,
        encadrant,
        etablissement, 
        departement, 
        discipline, 
        thematique, 
        labo], (err, result) => {
        console.log(res)
    }
   );
});
});


app.listen(3002, () => {
    console.log("running server on port 3002")
}) */