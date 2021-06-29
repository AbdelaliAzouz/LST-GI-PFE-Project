import { useState, useEffect } from 'react';
import Axios from 'axios'
import './Profile.css'
import Navbar2 from '../Navbar/Navbar2/Navbar2';
import ProfilePic from './ProfilePic';


function Profile() {

    const [ userLastName, setUserLastName ] = useState("")
    const [ userFirstName, setFirstName ] = useState("")
    const [ userEmail, setEmail ] = useState("")
    const [ userEtablissement, setUserEtablissement ] = useState("")
    const [ userDepartement, setUserDepartement ] = useState("")
    const [ userLabo, setUserLabo ] = useState("")
    const [ userThematique, setUserThematique ] = useState("")

    Axios.defaults.withCredentials = true;

  useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
          setUserLastName(response.data.user[0].nom)
          setFirstName(response.data.user[0].prenom)
          setEmail(response.data.user[0].email_institu)
          setUserEtablissement(response.data.user[0].etablissement)
          setUserDepartement(response.data.user[0].departement)
          setUserLabo(response.data.user[0].labo)
          setUserThematique(response.data.user[0].thematique)
      })
  }
, [])

    return (
    <div>
            <Navbar2/>
        <div className="container">
        <div className="main-body">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <ProfilePic/>
                        {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/> */}
                        <div className="mt-3">
                          <h4>{userFirstName} {userLastName}</h4>
                          <p className="text-muted font-size-sm">{userEmail}</p>
                          <p className="text-secondary mb-1">{userEtablissement}</p>
                          <div className="btn-toolbar">
                          <button className="btn btn-primary">Follow</button>
                          <button className="btn btn-outline-primary">Message</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0 mt-2"><i className="fab fa-researchgate fa-2x" id="RG"></i>Researchgate</h6>
                        <span className="text-secondary"><a href="https://scholar.google.com/">www.G-Scholar.com</a></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0 mt-2"><img src="https://freepngimg.com/download/science/63222-google-scholar-doctor-science-university-philosophy-computer.png" id="GS" alt="google scholar"></img>Google scholar</h6>
                        <span className="text-secondary"><a href="https://www.linkedin.com/feed/">www.linkedin.com</a></span>                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0  mt-2"><img src="https://camo.githubusercontent.com/ec1c790ef8fcb75b37bccd96b0f51869dc2be534/68747470733a2f2f7777772e6665722e756e697a672e68722f5f7075622f7468656d65735f7374617469632f666572323031362f64656661756c742f696d672f73636f7075732d69636f6e2e706e67" id="SC" alt="google scholar"></img>Scopus</h6>
                        <span className="text-secondary"><a href="https://www.scopus.com/freelookup/form/author.uri">www.Scopus.com</a></span>                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0 mt-2"><svg id="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                        <span className="text-secondary"><a href="https://github.com/">www.Github.com</a></span>                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0 mt-2" ><svg id="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Linkedin</h6>
                        <span className="text-secondary"><a href="https://www.linkedin.com/feed/">www.linkedin.com</a></span>                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Nom</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {userLastName}
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Prenom</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {userFirstName}
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email institutionelle</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {userEmail}
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Etablissement</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {userEtablissement}
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Departement</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {userDepartement}
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Thématique</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {userThematique}
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Laboratoire</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {userLabo}
                        </div>
                      </div>
                      <hr/>
                   
                    </div>
                  </div>
    
                  <div className="row gutters-sm">
                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2"></i>Projets académiques</h6>
                          <small>Projet 1</small>
                          <div className="progress mb-3" style={{height: "5px"}}>
                            <div className="progress-bar bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Projet 2</small>
                          <div className="progress mb-3" style={{height: "5px"}}>
                            <div className="progress-bar bg-primary" role="progressbar" style={{width: "90%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Projet 3</small>
                          <div className="progress mb-3" style={{height: "5px"}}>
                            <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Projet 4</small>
                          <div className="progress mb-3" style={{height: "5px"}}>
                            <div className="progress-bar bg-primary" role="progressbar" style={{width: "97%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Ajouter un projet</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2"></i>Articles</h6>
                          <small>Article 1</small>
                          <div className="progress mb-3" style={{height: "5px"}}>
                            <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Article 2</small>
                          <div className="progress mb-3" style={{height: "5px"}}>
                            <div className="progress-bar bg-info" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Article 3</small>
                          <div className="progress mb-3" style={{height: "5px"}}>
                            <div className="progress-bar bg-info" role="progressbar" style={{width: "89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <small>Ajouter une article </small>
                        </div>
                      </div>
                    </div>
                  </div>
    
    
    
                </div>
              </div>
    
            </div>
        </div>
    </div>
        
    )
}

export default Profile
