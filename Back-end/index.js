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
    methods: ["GET", "POST", "PUT", "DELETE"],
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

/* app.post("/logout", (req) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    });
});  */


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


// Créer un Admin aprés qu'on clique sur le bouton ESPACE ADMIN

app.post("/creerAdminAuto", (req, res) => {
    
    // Pour Voir si un admin est déja inséré aprés qu'on click sur ESPACE ADMIN
    db.query("SELECT * FROM admin ", function(err, result, field){
        if(result.length === 0){
            // l'admin automatique n'est pas encore inséré
            db.getConnection(function(err) {
                    if (err) throw err;
                    console.log("Connected!");
                    const sqlAjouterAdmin = "INSERT INTO admin (nomAdmin, prenomAdmin ,emailAdmin, mdpAdmin) VALUES ('nomadmin', 'prenomadmin', 'admin.email@uae.ac.ma', 'adminpassword')";
                    db.query(sqlAjouterAdmin, function (err, result) {
                        if (err) throw err;
                        console.log("Vous avez bien insérer un Admin");
                });
            });
        }else{
            // l'admin est déjà inséré
            console.log("Un Admin est déjà inséré au tableau!")
        }
    });

});


// ----------Ajouter Une Structure Labo/Equipe---------------

app.post("/api/AjouterUneStructure", (req, res) => {

    const nomStructure = req.body.nomStructure;
    const responsable = req.body.responsable;
    const listeMembres = req.body.listeMembres;
    const typeStructure = req.body.typeStructure;
    const nombreMembres = req.body.nombreMembres;

    const sqlAjouterStructure = "INSERT INTO structure_recherche (nomStructure , responsable, listeMembres, typeStructure, nombreMembres ) VALUES (?,?,?,?,?) "
        db.query(sqlAjouterStructure, 
            [
                nomStructure,
                responsable,
                listeMembres,
                typeStructure,
                nombreMembres
            ],(err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Bien Insérés!");
                    console.log("Une Structure est bien Insérée!");
                }
            }
    );
});

// ------Afficher Tous les Structures------------------------

app.get("/afficherStructures", (req, res) => {
    db.query("SELECT * FROM structure_recherche", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// -----------Modifier le nom d'une Structure----------------------------
app.put("/updateNomStructure", (req, res) => {
    const id = req.body.id;
    const nomStructure = req.body.nomStructure;
    db.query(
        "UPDATE structure_recherche SET nomStructure = ? WHERE id = ?",
        [nomStructure, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
// -----------Modifier le Responsable d'une Structure----------------------------
app.put("/updateResponsable", (req, res) => {
    const id = req.body.id;
    const responsable = req.body.responsable;
    db.query(
        "UPDATE structure_recherche SET responsable = ? WHERE id = ?",
        [responsable, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
// -----------Modifier la liste des Membres d'une Structure----------------------------
app.put("/updateListeMembre", (req, res) => {
    const id = req.body.id;
    const listeMembres = req.body.listeMembres;
    db.query(
        "UPDATE structure_recherche SET listeMembres = ? WHERE id = ?",
        [listeMembres, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
// -----------Modifier le Type d'une Structure----------------------------
app.put("/updateTypeStructure", (req, res) => {
    const id = req.body.id;
    const typeStructure = req.body.typeStructure;
    db.query(
        "UPDATE structure_recherche SET typeStructure = ? WHERE id = ?",
        [typeStructure, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
// -----------Modifier le nombre des Membres d'une Structure----------------------------
app.put("/updateNombreMembres", (req, res) => {
    const id = req.body.id;
    const nombreMembres = req.body.nombreMembres;
    db.query(
        "UPDATE structure_recherche SET nombreMembres = ? WHERE id = ?",
        [nombreMembres, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
// Check if la table structure_recherche est vide ou pleine
app.get("/CheckStructureTable", (req, res) => {
    db.query( "SELECT * FROM structure_recherche;",
        (err, result) => {
            if (err) {
                res.send({ err: err});
            }

            if(result.length === 0){
                console.log("la table est vide");
                res.send({ message: "Vide!"})
                // res.send(result);
            }
            else{
                console.log("la table est pleine");
                res.send({ message : "la table Structures de Recherche est pleine!" });
                // res.send(result);
            }
        }
    );
});

// -----------Supprimer Structure---------------------------

app.delete("/supprimerUneStructure/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM structure_recherche WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("une structure est bien supprimée!")
        }
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

    db.query( "SELECT * FROM chercheur where email_institu = ?;",
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
// -----------Afficher Tous Les Structures de Recherche---------------------------

app.get("/TousStructuresRecherche", (req, res) => {
    db.query("SELECT * FROM structure_recherche", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.send(result);
    }
    if (result.length === 0) {
        console.log("la table structure_recherche est vide!")
    } else {
        console.log("la table structure_recherche est pleine!")
    }
    
    });
});

// ----------------------------------------------------Thematique------------------------------------------------
// ----------Ajouter Une Thematique Labo/Equipe---------------

app.post("/api/AjouterUneThematique", (req, res) => {

    const nomThematique = req.body.nomThematique;
    const etablissement = req.body.etablissement;
    const laboequipe = req.body.laboequipe;
    const chercheur = req.body.chercheur;
    
    const sqlAjouterThematique = "INSERT INTO thematique (nomThematique , etablissement, laboequipe, chercheur) VALUES (?,?,?,?) "
        db.query(sqlAjouterThematique, 
            [
                nomThematique,
                etablissement,
                laboequipe,
                chercheur
            ],(err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Bien Insérés!");
                    console.log("Une Thematique est bien Insérée!");
                }
            }
    );
});

// ------Afficher Tous les Thematiques------------------------

app.get("/afficherThematiques", (req, res) => {
    db.query("SELECT * FROM thematique", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// -----------Modifier le nom d'une Thematique----------------------------
app.put("/updateNomThematique", (req, res) => {
    const id = req.body.id;
    const nomThematique = req.body.nomThematique;
    db.query(
        "UPDATE thematique SET nomThematique = ? WHERE id = ?",
        [nomThematique, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
// -----------Modifier l'Etablissement d'une Thematique----------------------------
app.put("/updateEtablissement", (req, res) => {
    const id = req.body.id;
    const etablissement = req.body.etablissement;
    db.query(
        "UPDATE thematique SET etablissement = ? WHERE id = ?",
        [etablissement, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
// -----------Modifier laboequipe d'une Thematique----------------------------
app.put("/updateLaboEquipe", (req, res) => {
    const id = req.body.id;
    const laboequipe = req.body.laboequipe;
    db.query(
        "UPDATE thematique SET laboequipe = ? WHERE id = ?",
        [laboequipe, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
// -----------Modifier chercheur d'une Thematique----------------------------
app.put("/updateChercheur", (req, res) => {
    const id = req.body.id;
    const chercheur = req.body.chercheur;
    db.query(
        "UPDATE thematique SET chercheur = ? WHERE id = ?",
        [chercheur, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

// Check if la table thematique est vide ou pleine
app.get("/CheckThematiqueTable", (req, res) => {
    db.query( "SELECT * FROM thematique;",
        (err, result) => {
            if (err) {
                res.send({ err: err});
            }

            if(result.length === 0){
                console.log("la table Thematique est vide");
                res.send({ message2: "Vide!"})
                // res.send(result);
            }
            else{
                console.log("la table Thematique est pleine");
                res.send({ message2 : "la table Thematique est pleine!" });
                // res.send(result);
            }
        }
    );
});

// -----------Supprimer Thematique---------------------------

app.delete("/supprimerUneThematique/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM thematique WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("une thematique est bien supprimée!")
        }
    });
});

// -----------Afficher Tous Les Thematiques---------------------------

app.get("/TousThematiques", (req, res) => {
    db.query("SELECT * FROM thematique", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.send(result);
    }
    if (result.length === 0) {
        console.log("Vide!")
    } else {
        console.log("la table thematique est pleine!")
    }
    
    });
});
// ----------------------------------------------------Thematique------------------------------------------------



// ----------LoginAdmin--------------------

app.get("/loginAdmin", (req, res) => {
    if(req.session.user){
        res.send({ loggedIn: true, user: req.session.user })
    }
    else{
        res.send({ loggedIn: false })
    }
})
//la fonction de Login
app.post("/loginAdmin", (req, res) => {

    const emailAdmin = req.body.emailAdmin;  
    const mdpAdmin = req.body.setMdpAdmin;

    db.query( "SELECT * FROM admin where emailAdmin = ?;",
        emailAdmin,
        (err, result) => {
            if (err) {
                res.send({ err: err});
            }

            if(result.length > 0){
                if(mdpAdmin===result[0].mdpAdmin){
                        if(response) {
                            req.session.user = result;
                            console.log(req.session.user);
                            res.send(result);
                        }else {
                            res.send({ message: "Wrong username/password combination !"})
                            console.log(result);
                        }
                }
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