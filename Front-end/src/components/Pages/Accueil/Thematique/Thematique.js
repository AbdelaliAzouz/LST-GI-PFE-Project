import '../Labo/labo.css'
import './Thematique.css'
import Navbar2 from '../../../Navbar/Navbar2/Navbar2'
import { useState } from "react";
import Axios from 'axios';
import ExternalLink from '../../../../images/external-link.png'
// Pop-up
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Thematique() {

    const [tousThematiquesList , setTousThematiquesList] = useState([]);
    const afficherTousThematique = () => {
        Axios.get("http://localhost:3001/TousThematiques").then((response) => {
            setTousThematiquesList(response.data);
        });
    };

    return (
    <div>
        <Navbar2/>
        <div className="labo">
            <h1 className="header-labo-equipe">
                Thématiques de Recherche
            </h1>
            <h2 className="header-labo-equipe">
                <button
                    onClick={afficherTousThematique}
                >
                    Faculté des Sciences et Techniques de Tanger
                </button>
            </h2>
            <div className="liste-labos-container">
                <div className="liste-labos">
                    {tousThematiquesList.map((val, key) => {
                        return(
                        <Popup
                            className="popupstyle"
                            trigger={
                                <button
                                    className="btn-labo-equipe">
                                        {val.nomThematique}
                                </button>}
                            position="bottom left"
                        >
                            <div className="popup-things">
                                <p className="marginbottom">Etablissement : <br /> 
                                    <span>{val.etablissement}</span>
                                </p>
                                <p className="marginbottom">Type de la Structure : <br />
                                    <span>{val.laboequipe}</span>
                                </p>
                                <p>
                                    {
                                        val.chercheur.length > 30 ?
                                        <a href={val.chercheur} target="_blank" rel="noreferrer">
                                            <span className="marginbottomspan">
                                                Plus de détails sur cette Thematique
                                            </span>
                                            <img className="imgexternallink" src={ExternalLink} alt="externallink" />
                                        </a>
                                        :
                                        <h2>
                                            Chercheur :
                                            <br />
                                            <span className="marginbottomspan">
                                                {val.chercheur}
                                            </span>
                                        </h2>
                                        
                                    }
                                </p>
                            </div>
                        </Popup>
                    )})}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Thematique;