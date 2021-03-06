import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import WelcomePage from "./components/WelcomPage/WelcomePage";
import Description1 from "./components/Description/Description1";
import Description2 from "./components/Description/Description2";
import Footer from './components/Footer/Footer';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './components/Pages/Accueil/Accueil';

// importés pour la page d'insription
import NavbarInscription from './components/Page Inscription/Navbar/Navbar'
import MilieuInscription from './components/Page Inscription/Milieu/Milieu'
import EnsFormInscription from './components/Page Inscription/Form/EnsForm'
import DocFormInscription from './components/Page Inscription/Form/DocForm'
import RetourBtnInscription from './components/Page Inscription/RevenirAccueil/RetourBtn'
import Labo from '../src/components/Pages/Accueil/Labo/labo' // importés pour Labos
import Etablissements from '../src/components/Pages/Accueil/Etablissements/Etablissements' // importés pour Etablissements
import ProtectedRoue from '../src/components/ProtectedRoute/ProtectedRoue'
import Profile from '../src/components/Profile/Profile'
import About from '../src/components/Pages/AboutPage/AboutPage'

// importés pour les fonctionnalités de l'Admin
import EspaceAdmin from './components/Pages/Accueil/Admin/espaceAdmin'
import EspaceAdminAccueil from './components/Pages/Accueil/Admin/espaceAdminAccueil'
import AjouterStructure from './components/Pages/Accueil/Admin/ajouterStructure'
import Thematiques from '../src/components/Pages/Accueil/Thematique/Thematique'


const App = () => {

    const [loggedIn, setIoggedIn] = useState(true);

    return(
    <div className="App" >
        <Router>
            <Route exact path="/">
                <Navbar />
                <WelcomePage />
                <Description1/>
                <Description2/>
                <Footer/>
            </Route>
            <Route exact path="/Inscription">
                <NavbarInscription/>
                <RetourBtnInscription/>
                <MilieuInscription/>
            </Route>
            <Route exact path="/Inscription/EnsForm">
                <RetourBtnInscription/>
                <EnsFormInscription/>
            </Route>
            <Route exact path="/Inscription/DocForm">
                <RetourBtnInscription/>
                <DocFormInscription/>
            </Route>
            <Route exact path="/Profile">
                <Profile/>
            </Route>
            <Route exact path="/About">
                <About/>
            </Route>

            <ProtectedRoue path="/Accueil" component={Accueil} loggedIn={loggedIn} />
            <Route exact path='/Labos'>
                <Labo/>
            </Route>
            <Route exact path='/Etablissements'>
                <Etablissements/>
            </Route>
            <Route exact path='/Thematiques'>
                <Thematiques/>
            </Route>
            <Route exact path='/EspaceAdmin'>
                <EspaceAdmin/>
            </Route>
            <Route exact path='/EspaceAdmin/Accueil'>
            
                <EspaceAdminAccueil/>
            </Route>
            <Route path='/EspaceAdmin/AjouterStructure'>
                
                <AjouterStructure/>
            </Route>
        </Router>
    </div >
    );
};


export default App;