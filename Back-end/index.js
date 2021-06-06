const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"pfe_database"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

//la fonction d'envoie les informations de l'enseignant à la base de donées
app.post("/api/insertEns", (req, res) => {

        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const email_institu = req.body.email_institu;
        const mot_de_passe = req.body.mot_de_passe;
        const etablissement = req.body.etablissement;
        const departement = req.body.departement;
        const discipline = req.body.discipline;
        const thematique = req.body.thematique;
        const labo = req.body.labo;

        bcrypt.hash(mot_de_passe,saltRounds, (err, hash) => {

            if(err){
                console.log(err)
            }

            const sqlInsert = "INSERT INTO enseignant ( nom, prenom, email_institu, mot_de_passe, etablissement, departement, discipline, thematique, labo ) VALUES (?,?,?,?,?,?,?,?,?) "
            db.query(sqlInsert, [nom, 
                prenom, 
                email_institu, 
                hash, 
                etablissement, 
                departement, 
                discipline, 
                thematique, 
                labo], (err, result) => {
                console.log(res)
            });

        })

    
})


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

        bcrypt.hash(mot_de_passe,saltRounds, (err, hash) => {

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
        });
    })
})

//la fonction de Login
app.post("/login", (req, res) => {

        const email_institu = req.body.email_institu;  
        const mot_de_passe = req.body.mot_de_passe;     //this password should be encrypted

    db.query( "SELECT * FROM doctorant WHERE email_institu = ? AND mot_de_passe = ?", [ email_institu, mot_de_passe, ], 
        (err, result) => {
            if (err) {
                res.send({ err: err});
            }
            if(result.length > 0){
                res.send({ message: "Wrong username/password combination " });
            }
        
    });
})



app.listen(3001, () => {
    console.log("running server on port 3001")
})