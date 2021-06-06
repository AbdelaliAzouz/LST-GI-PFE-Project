import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {

const [isSignedIn, setSignedIn] = useState(false); 

const uiConfig = { 
  signInFlow: "popup", 
  signInOptions: [ 
    firebase.auth.GoogleAuthProvider.PROVIDER_ID, ], 
  callbacks: { signInSuccessWithAuthResult: () => false 
  },
};

useEffect(() => { //Cette fonction remplace le components 'componentDidMount'
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
      console.log(user);
    });
}, []);

return(
    <div className="Login" >

{isSignedIn ? (
                 // ici il faut ajouter un routing vers un autre page 'PagePrincupal.js'  (protected routing)       
    <span > 
      <div style={{marginLeft:'25px'}}>
        <div >Signed In!</div>
        <button className="btn btn-primary" onClick={() => firebase.auth().signOut()}> Sign out! </button> 
        <h1>Welcome {firebase.auth().currentUser.displayName}</h1> 
        <img alt="profile pic" src={firebase.auth().currentUser.photoURL} /> 
      </div>
   </span> 
   ) : ( 
   <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}  /> 
   
)} 
</div>
)
}

export default Login;