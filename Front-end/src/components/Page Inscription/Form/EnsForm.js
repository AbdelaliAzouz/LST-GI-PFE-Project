import './Form.css';
import { useState } from 'react';
import Axios from 'axios'
import showPwdImg from '../../../images/show-password.svg';
import hidePwdImg from '../../../images/hide-password.svg';
import './password.css';
import './Form.css';
import { Link } from 'react-router-dom'


function EnsFormInscription () {

        const [ nom, setNom ] = useState("")
        const [ prenom, setPrenom ] = useState("")
        const [ email_institu, setEmail_institu ] = useState("")
        const [ mot_de_passe, setMot_de_passe ] = useState("")
        const [ etablissement, setEtablissement ] = useState("")
        const [ departement, setDepartement ] = useState("")
        const [ discipline, setDiscipline ] = useState("")
        const [ thematique, setThematique ] = useState("")
        const [ labo, setLabo ] = useState("")

        const [isRevealPwd, setIsRevealPwd] = useState(false); //for the password


        const submitFormEns = () =>{
            Axios.post('http://localhost:3001/api/insertEns', { 
                nom: nom, 
                prenom: prenom, 
                email_institu: email_institu, 
                mot_de_passe: mot_de_passe, 
                etablissement: etablissement, 
                departement: departement, 
                discipline: discipline, 
                thematique: thematique, 
                labo:labo 
        }).then(()=> {
            alert("successful insert")
        })
        }

    return(
        <div className="testbox">
                <form id="ensForm">
                    <div className="banner">
                        <h1 className="hEnseignant">Enseignant</h1>
                    </div>
                    <br/>
                    <br/>
                    <span className="required champ-obl">*</span><span className="champ-obl"> : Champs Obligatoires!</span>
                    <div className="colums">    
                        <div className="item">
                            <label className="labelForInsription" htmlFor="nom">Nom<span className="required">*</span></label>
                            <input className="inputForInsription" id="nom" type="text" name="nom" onChange={ (e) => {setNom(e.target.value)}} required/>
                        </div>
                        <div className="item">
                            <label className="labelForInsription" htmlFor="prenom">Prénom<span className="required">*</span></label>
                            <input className="inputForInsription" id="prenom" type="text" name="prenom" onChange={ (e) => {setPrenom(e.target.value)}} required/>
                        </div>
                        <div className="item">
                            <label className="labelForInsription" htmlFor="emailInst">Email Institutionnel<span className="required">*</span></label>
                            <input className="inputForInsription" id="emailInst" type="text" name="emailInst" onChange={ (e) => {setEmail_institu(e.target.value)}} required/>
                        </div>
                        <div>
                            <label className="labelForInsription" htmlFor="emailPerso">Créez un Mot de Passe<span className="required">*</span></label>
                            <div className="item inputpass">
                                <input
                                    className="inputForInsription"
                                    name="mot_de_passe"
                                    type={isRevealPwd ? "text" : "password"}
                                    value={mot_de_passe}
                                    onChange={ (e) => {setMot_de_passe(e.target.value)}}
                                    required
                                />
                                <img
                                    title={isRevealPwd ? "Hide password" : "Show password"}
                                    src={isRevealPwd ? hidePwdImg : showPwdImg}
                                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                                    alt="hide/show"
                                />
                            </div>
                            {/* <input className="inputForInsription" id="emailPerso" type="text"   name="emailPerso" required/> */}
                        </div>
                        <div className="item">
                            <label className="labelForInsription pForInsription">Votre Etablissement<span className="required">*</span></label>
                            <select required aria-required="true" className="selectInForm" onChange={ (e) => {setEtablissement(e.target.value)}}>
                                <option></option>
                                <option value="ensahociema">ENSA-Hoceima</option>
                                <option value="ensatetouan">ENSA-Téouan</option>
                                <option value="ensatanger">ENSA-Tanger</option>
                                <option value="encgtanger">ENCG-Tanger</option>
                                <option value="fsthoceima">FST-Hoceima</option>
                                <option value="fsttanger">FST-Tanger</option>
                                <option value="fplarache">FP-Larache</option>
                                <option value="fstetouan">FS-Tétouan</option>
                            </select>
                        </div>
                        <div className="item">
                            <label className="labelForInsription pForInsription">Votre Département<span className="required">*</span></label>
                            <select required aria-required="true" className="selectInForm" onChange={ (e) => {setDepartement(e.target.value)}}>
                                <option></option>
                                <option value="depinfo">GÉNIE INFORMATIQUE</option>
                                <option value="depmaths">MATHÉMATIQUES</option>
                                <option value="depchimie">GÉNIE CHIMIQUE</option>
                                <option value="depmecanique">GÉNIE MÉCANIQUE</option>
                                <option value="depterre">SCIENCES DE LA TERRE</option>
                                <option value="depelectrique">GÉNIE ELECTRIQUE</option>
                                <option value="depvie">SCIENCES DE LA VIE</option>
                                <option value="depphy">PHYSIQUE</option>
                            </select>
                        </div>
                        <div className="item">
                            <label className="labelForInsription pForInsription">Votre Discipline<span className="required">*</span></label>
                            <select required aria-required="true" className="selectInForm" onChange={ (e) => {setDiscipline(e.target.value)}}>
                                <option></option>
                                <option value="Informatiques">Informatiques</option>
                                <option value="Mathématiques">Mathématiques</option>
                                <option value="Physique">Physique</option>
                                <option value="Biologie">Biologie</option>
                                <option value="Giologie">Giologie</option>
                                <option value="ManagementIndustriels">Management Industriels</option>
                                <option value="Electronics">Electronics</option>
                            </select>
                        </div>
                        <div className="item">
                            <label className="labelForInsription pForInsription">Votre Thématique de Recherche<span className="required">*</span></label>
                            <input className="inputForInsription" id="thematique" type="text" name="thematique" onChange={ (e) => {setThematique(e.target.value)}} required/>
                        </div>
                    </div>
                    <div className="item">
                        <label className="labelForInsription pForInsription">Votre Labo/Equipe<span className="required">*</span></label>
                        <select required aria-required="true" className="selectInForm" onChange={ (e) => {setLabo(e.target.value)}}>
                            <option></option>
                            <option value="">Informatique, Systèmes et Télécommunications</option>
                            <option value="">Couches Minces et Nanomatériaux</option>
                            <option value="">Matériaux,  Environnement et Développement  Durable</option>
                            <option value="">Ingénierie, Innovation et management des systèmes Industriels</option>
                            <option value="">Physique Appliquée</option>
                            <option value="">Environnement Marin et Risques Naturels</option>
                            <option value="">Modélisation Mathématique et Contrôle</option>
                            <option value="">Biochimie et Génétique Moléculaire</option>
                            <option value="">Biotechnologies et Génie des Biomolécules</option>
                            <option value="">Equipe de Recherche Valorisation Biotechnologique des Microorganismes, Génomique et Bioinformatique</option>
                            <option value="">Transferts Thermiques et Energétique</option>
                            <option value="">Etude des risques naturels (Georisk)</option>
                            <option value="">Génomique biomédicale et oncogénétique</option>
                            <option value="">Géo informatique et Aménagment du territoire</option>
                            <option value="">Laboratoire de Génie Chimique et Valorisation des Ressources (LGCVR)</option>
                            <option value="">Mathématiques et Applications</option>
                            <option value="">Physico- Chimie des matériaux, Substances Naturelles et Environnement</option>
                            <option value="">Mécanique et Génie civil</option>
                        </select>
                    </div>
                    <div className="btn-block">
                    <Link to='/Accueil'>  {/* later add protected route here (login)*/}
                        <button className="btn-submit-form-inscription" type="submit" href="/Accueil" onClick={submitFormEns} >Envoyer</button>
                        </Link>
                    </div>
                </form>
        </div>
    )
}
export default EnsFormInscription;
