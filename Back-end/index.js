const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const { response } = require('express')
const saltRounds = 10
const cookieParser = require('cookie-parser')
const session = require('express-session')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"pfe_database"
})

//middlewares
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));  
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended:true }));

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        express: 60 * 60 * 24 * 100,
    },
})
);

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

//la fonction d'envoie les informations de l'enseignant à la base de donées
/* app.post("/api/insertEns", (req, res) => {

        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const email_institu = req.body.email_institu;
        const mot_de_passe = req.body.mot_de_passe;
        const etablissement = req.body.etablissement;
        const departement = req.body.departement;
        const discipline = req.body.discipline;
        const thematique = req.body.thematique;
        const labo = req.body.labo;
        const grade = req.body.grade;

        bcrypt.hash(mot_de_passe,saltRounds, (err, hash) => {

            if(err){
                console.log(err)
            }

            const sqlInsert = "INSERT INTO enseignant ( nom, prenom, email_institu, mot_de_passe, etablissement, departement, discipline, thematique, labo, grade ) VALUES (?,?,?,?,?,?,?,?,?,?) "
            db.query(sqlInsert, [nom, 
                prenom, 
                email_institu, 
                hash, 
                etablissement, 
                departement, 
                discipline, 
                thematique, 
                labo,
                grade], (err, result) => {
                console.log(res)
            });

        })

    
}) */


//la fonction d'envoie les informations de l'doctorant à la base de donées
/* app.post("/api/insertDoc", (req, res) => {

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
}); */

app.post("/api/insertChercheur", (req, res) => {

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
    const grade = req.body.grade;

    bcrypt.hash(mot_de_passe, saltRounds, (err, hash) => {

        if(err){
            console.log(err)
        }

    const sqlInsertt = "INSERT INTO chercheur ( nom, prenom, email_institu, mot_de_passe, directeur_these, encadrant, etablissement, departement, discipline, thematique, labo, grade ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) "
    db.query(sqlInsertt, 
        [nom, 
        prenom, 
        email_institu, 
        hash, 
        directeur_these,
        encadrant,
        etablissement, 
        departement, 
        discipline, 
        thematique, 
        labo,
        grade], (err, result) => {
        console.log(res)
    }
   );
});
});

app.get("/login", (req, res) => {
    if(req.session.user){
        res.send({ loggedIn: true, user: req.session.user })
        
    }else{
        res.send({ loggedIn: false })
    }
})



//la fonction de Login
app.post("/login", (req, res) => {

        const email_institu = req.body.email_institu;  
        const mot_de_passe = req.body.mot_de_passe;     //this password should be encrypted

        /*  SELECT * FROM doctorant LEFT JOIN enseignant ON doctorant.email_institu = enseignant.email_institu WHERE enseignant.email_institu = ? */
/*         select nom,prenom,email_institu,etablissement,departement,discipline,thematique,labo from doctorant where email_institu = 'abdelali.azouz@uae.ac.ma' union select nom,prenom,email_institu,etablissement,departement,discipline,thematique,labo from enseignant where email_institu = 'abdelali.azouz@uae.ac.ma'*/   

// si aucun requette ne marchera pas, on va créer une seul table dans la bdd appelé 'chercheur' dans laquelle il y aura des champs null 
// pour les valeurs qui n'ont aucun relation avec le doctorant (grade = null) ou pour l'enseignant (encadrant = null et doctorant = null);
    db.query( "select * from chercheur where email_institu = ?;",
         email_institu,
        (err, result) => {
            if (err) {
                res.send({ err: err});
            }

            if(result.length > 0){  
                   bcrypt.compare(mot_de_passe, result[0].mot_de_passe, (error, response) => {
                       if(response) {
                           
                           req.session.user = result;
                           console.log(req.session.user);
                           res.send(result);
                       }else {
                           res.send({ message: "Wrong username/password combination !"})
                           console.log(result);
                       }
                   });
                }
                    else{
                         res.send({ message : "User doesn't exist" });
                    }
            }
        );
});



app.listen(3001, () => {
    console.log("running server on port 3001")
})