import './espaceAdminAccueil.css'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { useState } from 'react';
import './espaceAdminAccueil'

export default function AjouterStructure() {

    const [ nomStruture, setNomStructure ] = useState("")
    const [ responsable, setResponsable ] = useState("")
    const [ listeMembres, setListeMembres ] = useState("")
    const [ typeStructure, setTypeStructure ] = useState("")
    const [ nombreMembres, setNombreMembres ] = useState("")

    const ajouterUneStructure = () =>{
        Axios.post('http://localhost:3001/api/AjouterUneStructure', {
            responsable: responsable,
            listeMembres: listeMembres,
            typeStructure: typeStructure,
            nombreMembres: nombreMembres,
            nomStruture: nomStruture
    }).then(()=> {  
        alert("Bien Ajoutée!")
    })
    }

    return (
        <div className="ajouterStructure">
            <h1 className="bienvenu-admin">
                Bienvenu à l'espace Admin
            </h1>
            <h2>
                Ajouter une Structure de Recherche
            </h2>
            <form className="form-ajouter-structure">
                
                <div>
                    <label htmlFor="nomStruture">Nom de la Structure</label>
                    <input
                        type="text"
                        name="nomStruture"
                        required
                        onChange={ (e) => {setNomStructure(e.target.value)}}
                    />
                </div>

                <div>
                    <label htmlFor="responsable">Nom Complet du Responsable</label>
                    <input
                        type="text"
                        name="responsable"
                        required
                        onChange={ (e) => {setResponsable(e.target.value)}}
                    />
                </div>

                <div>
                    <label htmlFor="listeMembres">
                        Liste des Membres/Lien vers ResearchGate
                    </label>
                    <input
                        type="text"
                        name="listeMembres"
                        required
                        onChange={ (e) => {setListeMembres(e.target.value)}}
                    />
                </div>

                <div>
                    <label htmlFor="typeStructure">Type de la Structure</label>
                    <select
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

                <div>
                    <label htmlFor="nbrmembre">Nombre des Membres</label>
                    <input
                        required
                        type="number"
                        min="1"
                        name="nombreMembres"
                        onChange={ (e) => {setNombreMembres(e.target.value)}}
                    />
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    onClick={() => { ajouterUneStructure();}}
                >
                    Ajouter
                </Button>
            </form>
        </div>
    )
}
