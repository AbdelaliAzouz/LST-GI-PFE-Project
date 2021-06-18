import Axios from 'axios'
import showPwdImg from '../../../../images/show-password.svg';
import hidePwdImg from '../../../../images/hide-password.svg';
import { Redirect,useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './espaceAdmin.css'



function EspaceAdmin () {


    // Pour Connecter Admin 
    const [ emailAdmin, setEmailAdmin ] = useState("")
    const [ mdpAdmin, setMdpAdmin ] = useState("")
    const [ loginAdminStatus, setLoginAdminStatus ] = useState("")
    
    let history = useHistory();
    const redirect = () => {
        history.push("/EspaceAdmin/Accueil")
    }

    const loginAdmin = () =>{
        Axios.post('http://localhost:3001/loginAdmin', { 
            emailAdmin: emailAdmin, 
            mdpAdmin: mdpAdmin, 

        }).then((response)=> {  
            console.log(response);
            if(response.data.message){
                setLoginAdminStatus(response.data.message)
            }else{
                setLoginAdminStatus('')
                /* setLoginAdminStatus(response.data[0].nom) */
                
            }
        })
    }
    useEffect(() => {
            Axios.get("http://localhost:3001/loginAdmin").then((response) => {
                if(response.data.loggedIn === true){
                    /* setLoginStatus(response.data.user[0].nom); */
                    return <Redirect to='/EspaceAdmin/Accueil'  />
                }
            })
        }
    , [])





    const [isRevealPwd, setIsRevealPwd] = useState(false); //for the password
    
    const validerChamps = () => {
        alert("Vous devez remplir tous les champs!");
    }
    return(
        <div>
            <div>
                <h1 className="admin-style1">Espace Admin</h1>
            </div>
            <form id="adminForm">
                <div>
                    <br/>
                    <br/>
                    <div className="container-admin">
                        <span className="required-admin champ-obl-admin">*</span><span className="champ-obl"> : Champs Obligatoires!</span>
                        <br />
                        <br />
                        <div>
                            <label className="labelForAdmin" htmlFor="emailInstAdmin">Email Institutionnel<span className="required-admin">*</span></label>
                            <input
                                className="inputForAdmin"
                                id="emailInstAdmin"
                                type="text"
                                name="emailInstAdmin"
                                onChange={ (e) => {setEmailAdmin(e.target.value)}}
                                required
                            />
                        </div>
                        <br />
                        <div>
                            <label className="labelForAdmin" htmlFor="motDePasse">Mot de Passe<span className="required-admin">*</span></label>
                            <div className="item inputpass">
                                <input
                                    className="inputForAdmin"
                                    type={isRevealPwd ? "text" : "password"}
                                    onChange={ (e) => {setMdpAdmin(e.target.value)}}
                                    required
                                />
                                <img
                                    title={isRevealPwd ? "Hide password" : "Show password"}
                                    src={isRevealPwd ? hidePwdImg : showPwdImg}
                                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                                    alt="hide/show"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="btn-block">
                        {/* <Link to='/EspaceAdmin/Accueil'> */}
                            <button
                                className="btn-submit-form-admin" type="button"
                                onClick={() => {
                                    if (!emailAdmin || !mdpAdmin){
                                        validerChamps()
                                    }
                                    else {
                                        loginAdmin();
                                        setTimeout(redirect,500);
                                    };
                                }}
                            >
                                Se connecter 
                            </button>
                        {/* </Link> */}
                    </div>
                    <h3>{loginAdminStatus}</h3>
                </div>
            </form>
        </div>
    )
}
export default EspaceAdmin;
