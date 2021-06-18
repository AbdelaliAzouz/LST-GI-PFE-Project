import './labo.css'
import Navbar2 from '../../../Navbar/Navbar2/Navbar2'
import { useState } from "react";
import Axios from 'axios';

// Pop-up
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Labo() {

    const [tousStructuresRechercheList , setTousStructuresRechercheList] = useState([]);
    const afficherTousStructuresRecherche = () => {
        Axios.get("http://localhost:3001/TousStructuresRecherche").then((response) => {
            setTousStructuresRechercheList(response.data);
        });
    };

    return (
    <div>
        <Navbar2/>
        <div className="labo">
            <h1 className="header-labo-equipe">
                Structures de Recherche
            </h1>
            <h2 className="header-labo-equipe">
                <button
                    onClick={afficherTousStructuresRecherche}
                >
                    Faculté des Sciences et Techniques de Tanger
                </button>
            </h2>
            <div className="liste-labos-container">
                <div className="liste-labos">
                    {tousStructuresRechercheList.map((val, key) => {
                        return(
                        <Popup
                            className="popupstyle"
                            trigger={
                                <button
                                    className="btn-labo-equipe">
                                        {val.nomStructure}
                                </button>}
                            position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> {val.responsable}</p>
                                <p>
                                    <a href={val.listeMembres} target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : {val.typeStructure}</p>
                                <p>Membres : {val.nombreMembres}</p>
                            </div>
                        </Popup>
                    )})}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Labo;