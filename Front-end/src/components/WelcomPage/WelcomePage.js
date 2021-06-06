/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Container from "../Global/Container";
import {button} from 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js';
import './WelcomePage.css'
import Login from '../Login/Login'

const Hero = () => {

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
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div>
                                <label htmlFor="exampleInputPassword1" className="form-label" style={{float:'left', color:'#09024D'}}>Password</label>
                                <input type="Password" className="form-control" id="exampleInputPassword1"></input>
                            </div>
                                <button className="btn btn-primary" type="button" contenu="Sign in"  /* uiConfig={uiConfig} firebaseAuth={firebase.auth()} */>sign in</button>
                        </form>
                    </span>
                </div>
                <div className="SignInGoogle" >
                <Login />
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