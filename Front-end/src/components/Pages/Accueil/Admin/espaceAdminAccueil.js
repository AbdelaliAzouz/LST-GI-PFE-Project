import Table from 'react-bootstrap/Table'
import './espaceAdminAccueil.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios'
// Importé pour Bootstrap Grid
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RetourBtnInscription from '../../../Page Inscription/RevenirAccueil/RetourBtn'
// import imgAdmin from '../../../../images/admin.png'

function EspaceAdminAccueil() {
    
    // Pour Profil de Admin
    // const [ nomAdmin, setNomAdmin ] = useState("")
    // const [ prenomAdmin, setPrenomAdmin ] = useState("")
    // const [ emailAdmin, setEmailAdmin ] = useState("")

    // Axios.defaults.withCredentials = true;

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/loginAdmin").then((response) => {
    //         setNomAdmin(response.data.nomAdmin)
    //         setPrenomAdmin(response.data.prenomAdmin)
    //         setEmailAdmin(response.data.emailAdmin)
    //     })
    //     }
    // , [])

    //---------------------------------Structures de Recherche---------------
    const [ nomStructure, setNomStructure ] = useState("")
    const [ responsable, setResponsable ] = useState("")
    const [ listeMembres, setListeMembres ] = useState("")
    const [ typeStructure, setTypeStructure ] = useState("")
    const [ nombreMembres, setNombreMembres ] = useState("")
    
    const [newNomStructure, setNewNomStructure] = useState(0);
    const [newResponsable, setNewResponsable] = useState(0);
    const [newListeMembres, setNewListeMembres] = useState(0);
    const [newTypeStructure, setNewTypeStructure] = useState(0);
    const [newNombreMembres, setNewNombreMembres] = useState(0);
    
    const [structureList, setStructureList] = useState([]);
    
    const [showTextStructure, setShowTextStructure] = useState(false);
    const clickVoirStructure = () => setShowTextStructure(true);
    
    const [showTextThematique, setShowTextThematique] = useState(false);
    const clickVoirThematique = () => setShowTextThematique(true);
    
    const [checkstructuretable, setCheckstructuretable] = useState("");

    const checkStructureTable = () => {
        Axios.get('http://localhost:3001/CheckStructureTable').then((response)=> {
            if(response.data.message){
                setCheckstructuretable(response.data.message)
            }
        })
    }


    // Actualiser la Pagae Aprés Click Pour supprimer les champs du formulaire Ajouter une structure
    function refreshPage() {
        window.location.reload(false);
    }
    const ajouterUneStructure = () =>{
        Axios.post('http://localhost:3001/api/AjouterUneStructure', {
            responsable: responsable,
            listeMembres: listeMembres,
            typeStructure: typeStructure,
            nombreMembres: nombreMembres,
            nomStructure: nomStructure
        }).then(()=> {
        setStructureList([
            ...structureList,
            {
                nomStructure: nomStructure,
                responsable: responsable,
                listeMembres: listeMembres,
                typeStructure: typeStructure,
                nombreMembres: nombreMembres
            },
        ]);
        });
    };

const afficherStructures = () => {
    Axios.get("http://localhost:3001/afficherStructures").then((response) => {
        setStructureList(response.data);
    });
};

// Supprimer une structure
const supprimerStructure = (id) => {
    Axios.delete(`http://localhost:3001/supprimerUneStructure/${id}`).then((response) => {
        setStructureList(
            structureList.filter((val) => {
                return val.id !== id;
            })
        );
    });
    // alert("Voulez-vous vraiment supprimer cette Structure ?")
};


// Modifier le nom d'une structure de recherche
const modifierNomStructure = (id) => {
    Axios.put("http://localhost:3001/updateNomStructure", { nomStructure: newNomStructure, id: id }).then(
        (response) => {
            setStructureList(
                structureList.map((val) => {
                    return val.id === id
                    ? {
                        nomStructure: newNomStructure,
                        responsable: val.responsable,
                        listeMembres: val.listeMembres,
                        typeStructure: val.typeStructure,
                        nombreMembres: val.nombreMembres,
                    }
                    : val;
                })
            );
        }
    );
};
// Modifier le Responsable d'une structure de recherche
const modifierResponsable = (id) => {
    Axios.put("http://localhost:3001/updateResponsable", { responsable: newResponsable, id: id }).then(
        (response) => {
            setStructureList(
                structureList.map((val) => {
                    return val.id === id
                    ? {
                        nomStructure: val.nomStructure,
                        responsable: newResponsable,
                        listeMembres: val.listeMembres,
                        typeStructure: val.typeStructure,
                        nombreMembres: val.nombreMembres,
                    }
                    : val;
                })
            );
        }
    );
};
// Modifier la liste des Membres d'une structure de recherche
const modifierListeMembre = (id) => {
    Axios.put("http://localhost:3001/updateListeMembre", { listeMembres: newListeMembres, id: id }).then(
        (response) => {
            setStructureList(
                structureList.map((val) => {
                    return val.id === id
                    ? {
                        nomStructure: val.nomStructure,
                        responsable: val.responsable,
                        listeMembres: newListeMembres,
                        typeStructure: val.typeStructure,
                        nombreMembres: val.nombreMembres,
                    }
                    : val;
                })
            );
        }
    );
};
// Modifier le Type d'une Structure
const modifierTypeStructure = (id) => {
    Axios.put("http://localhost:3001/updateTypeStructure", { typeStructure: newTypeStructure, id: id }).then(
        (response) => {
            setStructureList(
                structureList.map((val) => {
                    return val.id === id
                    ? {
                        nomStructure: val.nomStructure,
                        responsable: val.responsable,
                        listeMembres: val.listeMembres,
                        typeStructure: newTypeStructure,
                        nombreMembres: val.nombreMembres,
                    }
                    : val;
                })
            );
        }
    );
};
// Modifier le Type Le nombre des membres
const modifierNombreMembres = (id) => {
    Axios.put("http://localhost:3001/updateNombreMembres", { nombreMembres: newNombreMembres, id: id }).then(
        (response) => {
            setStructureList(
                structureList.map((val) => {
                    return val.id === id
                    ? {
                        nomStructure: val.nomStructure,
                        responsable: val.responsable,
                        listeMembres: val.listeMembres,
                        typeStructure: val.typeStructure,
                        nombreMembres: newNombreMembres,
                    }
                    : val;
                })
            );
        }
    );
};
// Valider que les champs d'Ajouter une structure sont tous remplis
const validerChamps = () => {
    alert("Vous devez remplir tous les champs!");
}
//---------------------------------Structures de Recherche---------------

//---------------------------------Thematique---------------

const [ nomThematique, setNomThematique ] = useState("")
const [ etablissement, setEtablissement ] = useState("")
const [ laboequipe, setLaboEquipe ] = useState("")
const [ chercheur, setChercheur ] = useState("")

const [newNomThematique, setNewNomThematique] = useState(0);
const [newEtablissement, setNewEtablissement] = useState(0);
const [newLaboEquipe, setNewLaboEquipe] = useState(0);
const [newChercheur, setNewChercheur] = useState(0);

const [thematiqueList, setThematiqueList] = useState([]);

const [checkthematiquetable, setCheckthematiquetable] = useState("");

const checkThematiqueTable = () => {
    Axios.get('http://localhost:3001/CheckThematiqueTable').then((response)=> {
        if(response.data.message2){
            setCheckthematiquetable(response.data.message2)
        }
    })
}



// Actualiser la Pagae Aprés Click Pour supprimer les champs du formulaire Ajouter une thematique
// function refreshPage() {
// window.location.reload(false);
// }
const ajouterUneThematique = () =>{
    Axios.post('http://localhost:3001/api/AjouterUneThematique', {
        nomThematique : nomThematique,
        etablissement : etablissement,
        laboequipe    : laboequipe,
        chercheur     : chercheur
    }).then(()=> {
        setThematiqueList([
            ...thematiqueList,
            {
                nomThematique : nomThematique,
                etablissement : etablissement,
                laboequipe   : laboequipe,
                chercheur     : chercheur
            },
        ]);
    });
};

const afficherThematiques = () => {
    Axios.get("http://localhost:3001/afficherThematiques").then((response) => {
        setThematiqueList(response.data);
    });
};

// Supprimer une thematique
const supprimerThematique = (id) => {
    Axios.delete(`http://localhost:3001/supprimerUneThematique/${id}`).then((response) => {
        setThematiqueList(
            thematiqueList.filter((val) => {
                return val.id !== id;
            })
        );
    });
    // alert("Voulez-vous vraiment supprimer cette Thematique ?")
};


// Modifier le nom d'une thematique de recherche
const modifierNomThematique = (id) => {
    Axios.put("http://localhost:3001/updateNomThematique", { nomThematique: newNomThematique, id: id }).then(
        (response) => {
            setThematiqueList(
                thematiqueList.map((val) => {
                    return val.id === id
                    ? {
                        nomThematique: newNomThematique,
                        etablissement : val.etablissement,
                        laboequipe   : val.laboequipe,
                        chercheur     : val.chercheur
                    }
                    : val;
                })
            );
        }
    );
};
// Modifier le Responsable d'une thematique de recherche
const modifierEtablissement = (id) => {
    Axios.put("http://localhost:3001/updateEtablissement", { etablissement: newEtablissement, id: id }).then(
        (response) => {
            setThematiqueList(
                thematiqueList.map((val) => {
                    return val.id === id
                    ? {
                        nomThematique: val.nomThematique,
                        etablissement: newEtablissement,
                        laboequipe   : val.laboequipe,
                        chercheur    : val.chercheur
                    }
                    : val;
                })
            );
        }
    );
};
// Modifier la liste des Membres d'une thematique de recherche
const modifierLaboEquipe = (id) => {
    Axios.put("http://localhost:3001/updateLaboEquipe", { laboequipe: newLaboEquipe, id: id }).then(
        (response) => {
            setThematiqueList(
                thematiqueList.map((val) => {
                    return val.id === id
                    ? {
                        nomThematique: val.nomThematique,
                        etablissement: val.etablissement,
                        laboequipe: newLaboEquipe,
                        chercheur: val.chercheur,
                    }
                    : val;
                })
            );
        }
    );
};
// Modifier le Type d'une Thematique
const modifierChercheur = (id) => {
    Axios.put("http://localhost:3001/updateChercheur", { chercheur: newChercheur, id: id }).then(
        (response) => {
            setThematiqueList(
                thematiqueList.map((val) => {
                    return val.id === id
                    ? {
                        nomThematique: val.nomThematique,
                        etablissement: val.etablissement,
                        laboequipe: val.laboequipe,
                        chercheur: newChercheur,
                    }
                    : val;
                })
            );
        }
    );
};


//---------------------------------Thematique---------------


return (
    <div className="App">
        <h1 className="bienvenu-admin">
            Bienvenu à l'espace Admin
        </h1>
        <RetourBtnInscription/>
        <Container>
            <Row>
                <Col>
                    {/* Structures de Recherche */}
                    <div className="col2-profil">
                        <h3>
                            <a href="#StructuresRecherches">
                                <button
                                    onClick={() => {
                                        setTimeout(function(){
                                            clickVoirStructure();
                                            afficherStructures();
                                            checkStructureTable();
                                        }, 100);
                                    }}
                                >
                                    Ajouter Structure de Recherche</button>
                            </a>
                        </h3>
                    </div>
                    <div className="testbox">
                        <form id="formStructure" className="form-ajouter-structure" required>
                            <div className="item">
                                <label
                                    className="labelForInsription"
                                    htmlFor="nomStructure">Nom de la Structure<span className="required">*</span></label>
                                <input className="inputAjouterStructure"
                                    type="text"
                                    name="nomStructure"
                                    required
                                    onChange={ (e) => {setNomStructure(e.target.value)}}
                                />
                            </div>

                            <div className="item">
                                <label
                                    className="labelForInsription"
                                    htmlFor="responsable">Nom Complet du Responsable<span className="required">*</span></label>
                                <input
                                    className="inputAjouterStructure"
                                    type="text"
                                    name="responsable"
                                    required
                                    onChange={ (e) => {setResponsable(e.target.value)}}
                                />
                            </div>

                            <div className="item">
                                <label
                                    className="labelForInsription"
                                    htmlFor="listeMembres">
                                    Liste des Membres (Lien vers ResearchGate)
                                <span className="required">*</span></label>
                                <input className="inputAjouterStructure"
                                    type="text"
                                    name="listeMembres"
                                    required
                                    onChange={ (e) => {setListeMembres(e.target.value)}}
                                />
                            </div>

                            <div className="item">
                                <label
                                    className="labelForInsription"
                                    htmlFor="typeStructure">Type de la Structure<span className="required">*</span></label>
                                <select className="selectAjouterStructure"
                                    required
                                    aria-required="true"
                                    name=""
                                    id=""
                                    onChange={ (e) => {setTypeStructure(e.target.value)}}
                                >
                                    <option></option>
                                    <option>Laboratoire</option>
                                    <option>Equipe</option>
                                </select>
                            </div>

                            <div className="item">
                                <label
                                    className="labelForInsription"
                                    htmlFor="nbrmembre">Nombre des Membres<span className="required">*</span></label>
                                <input className="inputAjouterStructure"
                                    required
                                    type="number"
                                    min="1"
                                    name="nombreMembres"
                                    onChange={ (e) => {setNombreMembres(e.target.value)}}
                                />
                            </div>

                            <Link to='/EspaceAdmin/Accueil'>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    onClick={() => {
                                        if (!nomStructure || !responsable || !listeMembres || !typeStructure || !nombreMembres){
                                            validerChamps()
                                        }
                                        else{
                                            ajouterUneStructure();
                                            clickVoirStructure();
                                            setTimeout(function() { clickVoirStructure();
                                            afficherStructures();
                                            checkStructureTable();; }, 400);
                                        }
                                    }}
                                >
                                    Ajouter
                                </Button>
                            </Link>
                        </form>
                    </div>
                </Col>
                <Col>
                    {/* Thematique */}
                    <div className="col2-profil">
                        <h3>
                            <a href="#Thematique">
                                <button
                                    onClick={() => {
                                        setTimeout(function(){
                                            clickVoirThematique();
                                            afficherThematiques();
                                            checkThematiqueTable();
                                        }, 100);
                                    }}
                                >
                                    Ajouter Thematique</button>
                            </a>
                        </h3>
                    </div>
                    <div className="testbox">
                        <form
                            id="ensForm"
                            className="form-ajouter-structure" required>
                            <div className="item">
                                <label
                                    className="labelForInsription"
                                    htmlFor="nomStructure">Nom de la Thematique<span className="required">*</span></label>
                                <input
                                    className="inputAjouterStructure"
                                    type="text"
                                    name="nomStructure"
                                    required
                                    onChange={ (e) => {setNomThematique(e.target.value)}}
                                />
                            </div>

                            <div className="item">
                                <label
                                    className="labelForInsription"
                                    htmlFor="responsable">Etablissement<span className="required">*</span></label>
                                <select required aria-required="true" className="selectAjouterStructure" onChange={ (e) => {setEtablissement(e.target.value)}}>
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
                                <label
                                    className="labelForInsription"
                                    htmlFor="listeMembres">
                                    La Structure de Recherche(Labo/Equipe)
                                <span className="required">*</span></label>
                                <input className="inputAjouterStructure"
                                    type="text"
                                    name="listeMembres"
                                    required
                                    onChange={ (e) => {setLaboEquipe(e.target.value)}}
                                />
                            </div>

                            <div className="item">
                                <label
                                    className="labelForInsription"
                                    htmlFor="typeStructure">Chercheur ou liste des Chercheurs<span className="required">*</span></label>
                                <input
                                    className="inputAjouterStructure"
                                    required
                                    aria-required="true"
                                    name=""
                                    id=""
                                    onChange={ (e) => {setChercheur(e.target.value)}}
                                >
                                </input>
                            </div>

                            <Link to='/EspaceAdmin/Accueil'>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    onClick={() => {
                                        if (!nomThematique || !etablissement || !laboequipe || !chercheur){
                                            validerChamps()
                                        }
                                        else{
                                            ajouterUneThematique();
                                            clickVoirThematique();
                                            setTimeout(function() { clickVoirThematique();
                                            afficherThematiques();
                                            checkThematiqueTable();}, 400);
                                        }
                                    }}
                                >
                                    Ajouter
                                </Button>
                            </Link>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        
        {/* StructuresRecherches */}
        <div id="StructuresRecherches">
            <h3>
                <button
                onClick={() => {
                    clickVoirStructure();
                    afficherStructures();
                    checkStructureTable();
                }}
                >
                    Voir Structures de Recherche
                </button>
            </h3>
            <div>
                {checkstructuretable==="Vide!" ?
                    <Table className="tablestructure" striped bordered hover variant="dark">

                        <thead>
                            <tr>
                                <th>Nom de la Structure</th>
                                <th>Responsable</th>
                                <th>Lien de ResearchGate</th>
                                <th>Type de la Structure</th>
                                <th>Nombre des Membres</th>
                                <th>Opérations</th>
                            </tr>
                        </thead>

                        
                        <tbody>
                            <tr>
                                <td colSpan="6" style={{textAlign: "center"}}>
                                    <h1>
                                        {
                                        checkstructuretable==="Vide!" ? checkstructuretable : null
                                        }
                                    </h1>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                : null}

            </div>
            <div className="table-labo structurerecherche">
                <Table className="tablestructure" striped bordered hover variant="dark">
                    {showTextStructure && checkstructuretable==="la table Structures de Recherche est pleine!" ?

                        <thead>
                            <tr>
                                <th>Nom de la Structure</th>
                                <th>Responsable</th>
                                <th>Lien de ResearchGate</th>
                                <th>Type de la Structure</th>
                                <th>Nombre des Membres</th>
                                <th>Opérations</th>
                            </tr>
                        </thead>
                    
                    : null}
                    {structureList.map((val, key) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>
                                        <div>{val.nomStructure}</div>
                                        <input
                                            type="text"
                                            placeholder="modifier ici..."
                                            onChange={(event) => {
                                                setNewNomStructure(event.target.value);
                                            }}
                                        />
                                        <button 
                                            className="btn-modifier"
                                            onClick={() => {
                                                modifierNomStructure(val.id);
                                                setTimeout(function() { clickVoirStructure();
                                                afficherStructures();
                                                checkStructureTable();; }, 400);
                                            }}
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                    <td>
                                        <div>{val.responsable}</div>
                                        <input
                                            type="text"
                                            placeholder="modifier ici..."
                                            onChange={(event) => {
                                                setNewResponsable(event.target.value);
                                            }}
                                        />
                                        <button 
                                            className="btn-modifier"
                                            onClick={() => {
                                                modifierResponsable(val.id);
                                                setTimeout(function() { clickVoirStructure();
                                                afficherStructures();
                                                checkStructureTable();; }, 400);
                                            }}
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                    <td>
                                        <div>{val.listeMembres}</div>
                                        <input
                                            type="text"
                                            placeholder="modifier ici..."
                                            onChange={(event) => {
                                                setNewListeMembres(event.target.value);
                                            }}
                                        />
                                        <button 
                                            className="btn-modifier"
                                            onClick={() => {
                                                modifierListeMembre(val.id);
                                                setTimeout(function() { clickVoirStructure();
                                                afficherStructures();
                                                checkStructureTable();; }, 400);
                                            }}
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                    <td>
                                        <div>{val.typeStructure}</div>
                                        <select
                                            onChange={(event) => {
                                                setNewTypeStructure(event.target.value);
                                            }}
                                        >
                                            <option></option>
                                            <option>Equipe</option>
                                            <option>Laboratoire</option>
                                        </select>
                                        <button 
                                            className="btn-modifier"
                                            onClick={() => {
                                                modifierTypeStructure(val.id);
                                                setTimeout(function() { clickVoirStructure();
                                                afficherStructures();
                                                checkStructureTable();; }, 400);
                                            }}
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                    <td>
                                        <div>{val.nombreMembres}</div>
                                        <input
                                            type="number"
                                            min="1"
                                            placeholder="modifier ici..."
                                            onChange={(event) => {
                                                setNewNombreMembres(event.target.value);
                                            }}
                                        />
                                        <button 
                                            className="btn-modifier"
                                            onClick={() => {
                                                modifierNombreMembres(val.id);
                                                setTimeout(function() { clickVoirStructure();
                                                afficherStructures();
                                                checkStructureTable();; }, 400);
                                            }}
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                    <td>
                                    <button
                                        className="btn-supprimer"
                                        onClick={(e) => {
                                            supprimerStructure(val.id);
                                            checkStructureTable();
                                            setTimeout(function() { clickVoirStructure();
                                            afficherStructures();
                                            checkStructureTable();; }, 400);
                                            // refreshPage();
                                            // if (window.confirm('Voulez-vous vraiment supprimer cette Structure ?'));
                                        }}
                                    >
                                        Supprimer
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </Table>
            </div>
        </div>
        {/* Thématique */}
        <div id="Thematique">
            <h3>
                <button
                    onClick={() => {
                        clickVoirThematique();
                        afficherThematiques();
                        checkThematiqueTable();
                    }}
                >
                    Voir Thematiques
                </button>
            </h3>
            <div>
                {checkthematiquetable==="Vide!" ?
                    <Table className="tablestructure" striped bordered hover variant="dark">

                        <thead>
                            <tr>
                                <th>Nom de la Thematique</th>
                                <th>Etablissement</th>
                                <th>Structure de Recherche</th>
                                <th>Chercheur</th>
                                <th>Opérations</th>
                            </tr>
                        </thead>

                        
                        <tbody>
                            <tr>
                                <td colSpan="6" style={{textAlign: "center"}}>
                                    <h1>
                                        {
                                        checkthematiquetable==="Vide!" ? checkthematiquetable : null
                                        }
                                    </h1>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                : null}

            </div>
            <div className="table-labo thematique">
                <Table className="tablestructure" striped bordered hover variant="dark">
                    {showTextThematique && checkthematiquetable==="la table Thematique est pleine!" ?

                        <thead>
                            <tr>
                                <th>Nom de la Thematique</th>
                                <th>Etablissement</th>
                                <th>Structure de Recherche</th>
                                <th>Chercheur</th>
                                <th>Opérations</th>
                            </tr>
                        </thead>
                    
                    : null}
                    {thematiqueList.map((val, key) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>
                                        <div>{val.nomThematique}</div>
                                        <input
                                            type="text"
                                            placeholder="modifier ici..."
                                            onChange={(event) => {
                                                setNewNomThematique(event.target.value);
                                            }}
                                        />
                                        <button 
                                            className="btn-modifier"
                                            onClick={() => {
                                                modifierNomThematique(val.id);
                                                setTimeout(function() { clickVoirThematique();
                                                afficherThematiques();
                                                checkThematiqueTable();; }, 400);
                                            }}
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                    <td>
                                        <div>{val.etablissement}</div>
                                        <select onChange={(event) => {
                                                setNewEtablissement(event.target.value);
                                            }}>
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
                                        <button 
                                            className="btn-modifier"
                                            onClick={() => {
                                                modifierEtablissement(val.id);
                                                setTimeout(function() { clickVoirThematique();
                                                afficherThematiques();
                                                checkThematiqueTable();; }, 400);
                                            }}
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                    <td>
                                        <div>{val.laboequipe}</div>
                                        <input
                                            type="text"
                                            placeholder="modifier ici..."
                                            onChange={(event) => {
                                                setNewLaboEquipe(event.target.value);
                                            }}
                                        />
                                        <button 
                                            className="btn-modifier"
                                            onClick={() => {
                                                modifierLaboEquipe(val.id);
                                                setTimeout(function() {
                                                    clickVoirThematique();
                                                    afficherThematiques();
                                                    checkThematiqueTable();; }, 400);
                                                }}
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                    <td>
                                        <div>{val.chercheur}</div>
                                        <input
                                            type="text"
                                            placeholder="modifier ici..."
                                            onChange={(event) => {
                                                setNewChercheur(event.target.value);
                                            }}
                                        />
                                        <button 
                                            className="btn-modifier"
                                            onClick={() => {
                                                modifierChercheur(val.id);
                                                setTimeout(function() {
                                                    clickVoirThematique();
                                                    afficherThematiques();
                                                    checkThematiqueTable();; },
                                                400);
                                        }}
                                        >
                                            Modifier
                                        </button>
                                    </td>
                                    <td>
                                    <button
                                        className="btn-supprimer"
                                        onClick={(e) => {
                                            supprimerThematique(val.id);
                                            checkThematiqueTable();
                                            setTimeout(function() {
                                                clickVoirThematique();
                                                afficherThematiques();
                                                checkThematiqueTable();; }, 400);
                                            // refreshPage();
                                            // if (window.confirm('Voulez-vous vraiment supprimer cette Structure ?'));
                                        }}
                                    >
                                        Supprimer
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </Table>
            </div>
        </div>
    </div>
);
}

export default EspaceAdminAccueil;
