import * as React from "react";
import './labo.css'
import Navbar2 from '../../../Navbar/Navbar2/Navbar2'

// Pop-up
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Labo = () => {
    
    return (
    <div>
        <Navbar2/>
        <div className="labo">
            <h1 className="header-labo-equipe">
                Labos/Equipes
            </h1>
            <h2 className="header-labo-equipe">
                Faculté des Sciences et Techniques de Tanger
            </h2>
            <div className="liste-labos-container">
                <div className="liste-labos">
                    
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                        <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Informatique, Systèmes et Télécommunications</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. ASTITO ABDELALI</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Laboratoire-dInformatique-Systemes-et-Telecoms-Abdelali-Astito" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Labo</p>
                                <p>Membres : 26</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                        </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Matériaux, Environnement et Développement  Durable</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Pr. BEN ALLAL LAILA</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Laila-Ben-Allal-Lab" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membre : 5</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Transferts Thermiques et Energétique</button>}
                        position="left center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. DRAOUI ABDESLAM</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Team-of-Heat-Transfer-Energetic-Abdeslam-Draoui" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 8</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Mathématiques et Applications</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. EL JARROUDI MUSTAPHA</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Mustapha-El-Jarroudi-Lab" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Labo</p>
                                <p>Membres : 20</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Physique Appliquée</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. DAANOUN ALI</p>
                                <p>
                                    <a href="https://www.researchgate.net/profile/Ali-Daanoun" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 6</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Couches Minces & Nanomatériaux</button>}
                        position="left center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. EL METOUI MUSTAPHA</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Thin-Films-Nanostructures-Lab-Mustapha-El-Metoui" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 7</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Environnement Marin et Risques Naturels</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. DAMNATI BRAHIM</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Brahim-Damnati-Lab-2" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 5</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Modélisation Mathématique et Contrôle</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. OUARDOUZ MUSTAPHA</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Mustapha-Ouardouz-Lab" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 7</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Biochimie et Génétique Moléculaire</button>}
                        position="left center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. NHIRI MOHAMED</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Mohamed-Nhiri-Lab" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 7</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Biotechnologies et Génie des Biomolécules</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. BAKKALI MOHAMMED</p>
                                {/* <p>
                                    <a href="" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p> */}
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 5</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Ingénierie, Innovation et management des systèmes Industriels</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. BEN ABDELLAH ABDELLATIF</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Mohamed-MADA-Lab" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Labo</p>
                                <p>Membres : 10</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Mécanique et Génie civil</button>}
                        position="left center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. DKIOUAK RACHID</p>
                                <p>
                                    <a href="https://www.researchgate.net/profile/Aziz-Dkiouak-2" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Labo</p>
                                <p>Membres : 11</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Etude des risques naturels (Georisk)</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. ROSSI ABDELHAMID</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Abdelhamid-Rossi-Lab" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 5</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Génomique biomédicale et oncogénétique</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. BENNANI MECHITA MOHCINE</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Biomedical-Genomics-and-Oncogenetics-Research-Lab-Mohcine-Bennani" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 5</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Géo informatique et Aménagment du territoire</button>}
                        position="left center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. BERNOUSSI ABDES SAMAD</p>
                                <p>
                                    <a href="https://www.researchgate.net/search.Search.html?type=researcher&query=BERNOUSSI%20ABDES%20SAMAD" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 7</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                </div>
                <div className="liste-labos">
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Laboratoire de Génie Chimique et Valorisation des Ressources (LGCVR)</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. CHAFIK TARIK</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Tarik-Chafiks-lab-Tarik-Chafik" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Labo</p>
                                <p>Membres : 15</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={<button className="btn-labo-equipe">Physico- Chimie des matériaux, Substances Naturelles et Environnement</button>}
                        position="right center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. KHADDOR MOHAMED</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Khadija-Ziat-Lab" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Labo</p>
                                <p>Membres : 14</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                    {/* <Link to='/Labos/CouchesMincesNanomatériaux'> */}
                    <Popup
                        className="popupstyle" trigger={
                            <button className="btn-labo-equipe">
                                Equipe de Recherche Valorisation Biotechnologique
                                <br />
                                des Microorganismes, Génomique et Bioinformatique
                            </button>
                        }
                        position="left center"
                        >
                            <div className="popup-things">
                                <p>Responsable : <br /> Mr. BARRIJAL SAID</p>
                                <p>
                                    <a href="https://www.researchgate.net/lab/Said-Barrijal-Lab" target="_blank" rel="noreferrer">
                                        Cliquez ici pour plus de détails!
                                    </a>
                                </p>
                                <p>Type de la Structure : Equipe</p>
                                <p>Membres : 5</p>
                                {/* <p>Liste des Membres :</p> */}
                            </div>
                    </Popup>
                    {/* </Link> */}
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                </div>
                <div className="liste-labos">
                </div>
            </div>
            {/* <h4>
                <Link to='/Labos/CouchesMincesNanomatériaux'>
                    <button className="btn-labo-equipe">
                        Couches Minces & Nanomatériaux
                    </button>
                </Link>
            </h4> */}
        </div>
        </div>
    );
};

export default Labo;

