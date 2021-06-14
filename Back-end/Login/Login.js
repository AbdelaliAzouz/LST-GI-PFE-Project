// const express = require('express')
// const app = express()
// const mysql = require('mysql')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const { response } = require('express')



// //middlewares

// app.use(cors());
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended: true}))


// //la fonction de Login
// app.post("/login", (req, res) => {

//     const email_institu = req.body.email_institu;  
//     const mot_de_passe = req.body.mot_de_passe;     //this password should be encrypted


// db.query( "SELECT * FROM doctorant WHERE email_institu = ? AND mot_de_passe = ?;",
//   [email_institu, mot_de_passe],
//     (err, result) => {
//         if (err) {
//             res.send({ err: err});
//         }

//         if(result.length > 0){
//            /*  bcrypt.compare(mot_de_passe, result[0].mot_de_passe, (error, response) =>{ */
//                 if(response){ 

//                     req.session.user = result
//                     console.log(req.session.user)
//                     res.send(result);
//                 }else{
//                      res.send({ message : "Wrong username/password combination !" })
//                 }
//             /* }); */
//         } else{
//             res.send({ message : "User dosne't exist" })
//         } 
//      } 
// );
// });

// app.listen(3004, () => {
//     console.log("running server on port 3004")
// })


// CTRL + K + C : for comment
// CTRL + K + U : for uncomment