/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Container from "../Global/Container";
import {button} from 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js';
import './WelcomePage.css'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom';


const Hero = () => {


    let history = useHistory();

    const redirect = () => {
        history.push("/Accueil")
    }

    const [ email_institu, setEmail_institu ] = useState("")
    const [ mot_de_passe, setMot_de_passe ] = useState("")
   
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
                /* setLoginStatus(response.data.user[0].nom); */
                return <Redirect to='/Accueil'  />
            }
        })
    }
, [])

    return (
        <section className="styles">
            <div className="overlay"></div>
            <Container>
                <div className="heroText">
                    <h1 style={{textShadow: '1px 1px 4px #0C0650', paddingTop:'70px' }}>RESEARCH PLATEFORME</h1>
                    <span>
                        <form >
                            <div>
                                <label htmlFor="exampleInputEmail1" className="form-label" style={{float:'left', color:'#09024D'}}>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (e) => {setEmail_institu(e.target.value)}}></input>
                            </div>
                            <div>
                                <label htmlFor="exampleInputPassword1" className="form-label" style={{float:'left', color:'#09024D'}}>Password</label>
                                <input type="Password" className="form-control" id="exampleInputPassword1" onChange={ (e) => {setMot_de_passe(e.target.value)}}></input>
                            </div>
                                <button className="btn btn-primary" type="button" contenu="Sign in" onClick={() => { login(); setTimeout(redirect,500); }} >sign in</button>

                        </form>
                         <h3>{loginStatus}</h3>
                    </span>
                </div>
            </Container>
            <div className="styles2" >
            <Particles className="styleParticles"
                params={{
                    "particles": {
                        "number": {
                            "value": 25
                        },
                        "size": {
                            "value": 3
                        },
                        "line_linked": {
            				"shadow": {
            					"enable": true,
            					"color": "#0E046B",
            					"blur": 0.5
            				},
                            "color": {
                                "value": "#005496"
                            }
            			}
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                    
                }} 
                
  />
            </div>
        </section>
    )
}
  
export default Hero;