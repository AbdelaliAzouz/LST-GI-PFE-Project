import './Form.css';
import { useState } from 'react';
import Axios from 'axios'
import showPwdImg from '../../../images/show-password.svg';
import hidePwdImg from '../../../images/hide-password.svg';
import './password.css';
import './Form.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function EnsFormInscription () {

    let history = useHistory();

    const redirect = () => {
        history.push("/Accueil")
    }

    const [ loginStatus, setLoginStatus ] = useState("")

    Axios.defaults.withCredentials = true;


    const login = () =>{
        Axios.post('http://localhost:3001/login', { 
            email_institu: email_institu, 
            mot_de_passe: mot_de_passe, 

    }).then((response)=> {  
        console.log(response);
        if(response.data.message){
            setLoginStatus(response.data.message)
            
        }else{
            setLoginStatus('')
            /* setLoginStatus(response.data[0].nom) */
            
        }
    })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if(response.data.loggedIn == true){
                 setLoginStatus(response.data.user[0].nom);
            }
        })
    }
, [])


        const [ nom, setNom ] = useState("")
        const [ prenom, setPrenom ] = useState("")
        const [ email_institu, setEmail_institu ] = useState("")
        const [ mot_de_passe, setMot_de_passe ] = useState("")
        const [ directeur_these, setDirecteur_these ] = useState("")
        const [ encadrant, setEncadrant ] = useState("")
        const [ etablissement, setEtablissement ] = useState("")
        const [ departement, setDepartement ] = useState("")
        const [ discipline, setDiscipline ] = useState("")
        const [ thematique, setThematique ] = useState("")
        const [ labo, setLabo ] = useState("")
        const [ grade, setGrade ] = useState("")

        const [isRevealPwd, setIsRevealPwd] = useState(false); //for the password


        const submitFormEns = () =>{

            

            Axios.post('http://localhost:3001/api/insertChercheur', { 
                nom: nom, 
                prenom: prenom, 
                email_institu: email_institu, 
                mot_de_passe: mot_de_passe, 
                directeur_these: directeur_these, 
                encadrant: encadrant,
                etablissement: etablissement, 
                departement: departement, 
                discipline: discipline, 
                thematique: thematique, 
                labo:labo,
                grade:grade 
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
                            <div>
                <input  id="hide" type="text" name="thematique" required onChange={ (e) => {setDirecteur_these(e.target.value)}}/>
                </div><div>
                <input  id="hide" type="text" name="thematique" required onChange={ (e) => {setEncadrant(e.target.value)}}/>
                </div>
                            {/* <input className="inputForInsription" id="emailPerso" type="text"   name="emailPerso" required/> */}
                        </div>
                        <div className="item">
                            <label className="labelForInsription pForInsription">Votre Etablissement<span className="required">*</span></label>
                            <select required aria-required="true" className="selectInForm" onChange={ (e) => {setEtablissement(e.target.value)}}>
                                <option></option>
                                <option>ENSA-Hoceima</option>
                                <option>ENSA-Téouan</option>
                                <option>ENSA-Tanger</option>
                                <option>ENCG-Tanger</option>
                                <option>FST-Hoceima</option>
                                <option>FST-Tanger</option>
                                <option>FP-Larache</option>
                                <option>FS-Tétouan</option>
                            </select>
                        </div>
                        <div className="item">
                            <label className="labelForInsription pForInsription">Votre Département<span className="required">*</span></label>
                            <select required aria-required="true" className="selectInForm" onChange={ (e) => {setDepartement(e.target.value)}}>
                                <option></option>
                                <option>GÉNIE INFORMATIQUE</option>
                                <option>MATHÉMATIQUES</option>
                                <option>GÉNIE CHIMIQUE</option>
                                <option>GÉNIE MÉCANIQUE</option>
                                <option>SCIENCES DE LA TERRE</option>
                                <option>GÉNIE ELECTRIQUE</option>
                                <option>SCIENCES DE LA VIE</option>
                                <option>PHYSIQUE</option>
                            </select>
                        </div>
                        <div className="item">
                            <label className="labelForInsription pForInsription">Votre Discipline<span className="required">*</span></label>
                            <select required aria-required="true" className="selectInForm" onChange={ (e) => {setDiscipline(e.target.value)}}>
                                <option></option>
                                <option >Informatiques</option>
                                <option >Mathématiques</option>
                                <option >Physique</option>
                                <option >Biologie</option>
                                <option >Giologie</option>
                                <option >Management Industriels</option>
                                <option >Electronics</option>
                            </select>
                        </div>
                        <div className="item">
                            <label className="labelForInsription pForInsription">Votre Thématique de Recherche<span className="required">*</span></label>
                            <input className="inputForInsription" id="thematique" type="text" name="thematique" onChange={ (e) => {setThematique(e.target.value)}} required/>
                        </div>
                    <div className="item">
                        <label className="labelForInsription pForInsription">Votre Labo/Equipe<span className="required">*</span></label>
                        <select required aria-required="true" className="selectInForm" onChange={ (e) => {setLabo(e.target.value)}}>
                            <option></option>
                            <option >Informatique, Systèmes et Télécommunications</option>
                            <option >Couches Minces et Nanomatériaux</option>
                            <option >Matériaux,  Environnement et Développement  Durable</option>
                            <option >Ingénierie, Innovation et management des systèmes Industriels</option>
                            <option >Physique Appliquée</option>
                            <option >Environnement Marin et Risques Naturels</option>
                            <option >Modélisation Mathématique et Contrôle</option>
                            <option >Biochimie et Génétique Moléculaire</option>
                            <option >Biotechnologies et Génie des Biomolécules</option>
                            <option >Equipe de Recherche Valorisation Biotechnologique des Microorganismes, Génomique et Bioinformatique</option>
                            <option >Transferts Thermiques et Energétique</option>
                            <option >Etude des risques naturels (Georisk)</option>
                            <option >Génomique biomédicale et oncogénétique</option>
                            <option >Géo informatique et Aménagment du territoire</option>
                            <option >Laboratoire de Génie Chimique et Valorisation des Ressources (LGCVR)</option>
                            <option >Mathématiques et Applications</option>
                            <option >Mécanique et Génie civil</option>
                            <option >Physico- Chimie des matériaux, Substances Naturelles et Environnement</option>
                        </select>
                    </div>
                    <div className="item">
                            <label className="labelForInsription pForInsription">Votre Grade<span className="required">*</span></label>
                            <select required aria-required="true" className="selectInForm" onChange={ (e) => {setGrade(e.target.value)}}>
                                <option></option>
                                <option >PA</option>
                                <option >PES</option>
                                <option >PH</option>
                            </select>
                        </div>
                    </div>
                    <div className="btn-block">
                        <button className="btn-submit-form-inscription" type="submit" href="/Accueil" onClick={() => { setTimeout(login,500); submitFormEns(); setTimeout(redirect,1000); }} >Envoyer</button>
                    </div>
                </form>
        </div>
    )
}
export default EnsFormInscription;
