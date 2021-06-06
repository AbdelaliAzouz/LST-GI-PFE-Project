import * as React from 'react';
import './Form.css';
class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: '',
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
            if (val !=="" && !Number(val)) {
                err = <strong className="errorMsg">Your age must be a number</strong>;
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    }
    render() {
        return (
        <div>
            <div id="ensForm" className="testbox">
                <form  action="/">
                    <div className="banner">
                        <h1>Enseignant</h1>
                    </div>
                    <br/>
                    <br/>
                    <div className="colums">
                        <div className="item">
                            <label htmlFor="nom">Nom<span className="required">*</span></label>
                            <input id="nom" type="text" name="nom" required/>
                        </div>
                        <div className="item">
                            <label htmlFor="prenom">Prénom<span className="required">*</span></label>
                            <input id="prenom" type="text" name="prenom" required/>
                        </div>
                        <div className="item">
                            <label htmlFor="emailPerso">Email Personnel<span className="required">*</span></label>
                            <input id="emailPerso" type="text"   name="emailPerso" required/>
                        </div>
                        <div className="item">
                            <label htmlFor="emailInst">Email Institutionnel<span className="required">*</span></label>
                            <input id="emailInst" type="text" name="emailInst" required/>
                        </div>
                        <div className="item">
                            <p>Votre Etablissement<span className="required">*</span></p>
                            <select defaultValue={'DEFAULT'}>    
                                <option value="DEFAULT" disabled ></option>
                                <option value="ensathociema">ENSA-Hoceima</option>
                                <option value="ensattetouan">ENSA-Téouan</option>
                                <option value="ensatanger">ENSA-Tanger</option>
                                <option value="encgtanger">ENCG-Tanger</option>
                                <option value="fsthoceima">FST-Hoceima</option>
                                <option value="fsttanger">FST-Tanger</option>
                                <option value="fplarache">FP-Larache</option>
                            </select>
                        </div>
                        <div className="item">
                            <p>Votre Département<span className="required">*</span></p>
                            <select defaultValue={'DEFAULT'}>    
                                <option value="DEFAULT" disabled ></option>
                                <option value="ensathociema">ENSA-Hoceima</option>
                                <option value="ensattetouan">ENSA-Téouan</option>
                                <option value="ensatanger">ENSA-Tanger</option>
                                <option value="encgtanger">ENCG-Tanger</option>
                                <option value="fsthoceima">FST-Hoceima</option>
                                <option value="fsttanger">FST-Tanger</option>
                                <option value="fplarache">FP-Larache</option>
                            </select>
                        </div>
                        <div className="item">
                            <p>Votre Discipline<span className="required">*</span></p>
                            <select defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled ></option>
                                <option value="ensathociema">ENSA-Hoceima</option>
                                <option value="ensattetouan">ENSA-Téouan</option>
                                <option value="ensatanger">ENSA-Tanger</option>
                                <option value="encgtanger">ENCG-Tanger</option>
                                <option value="fsthoceima">FST-Hoceima</option>
                                <option value="fsttanger">FST-Tanger</option>
                                <option value="fplarache">FP-Larache</option>
                            </select>
                        </div>
                        <div className="item">
                            <p>Votre Thématique de Recherche<span className="required">*</span></p>
                            <select defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled ></option>
                                <option value="ensathociema">ENSA-Hoceima</option>
                                <option value="ensattetouan">ENSA-Téouan</option>
                                <option value="ensatanger">ENSA-Tanger</option>
                                <option value="encgtanger">ENCG-Tanger</option>
                                <option value="fsthoceima">FST-Hoceima</option>
                                <option value="fsttanger">FST-Tanger</option>
                                <option value="fplarache">FP-Larache</option>
                            </select>
                        </div>
                    </div>
                    <div className="item">
                        <p>Votre Thématique<span className="required">*</span></p>
                        <select defaultValue={'DEFAULT'}>    
                            <option value="DEFAULT" disabled ></option>
                            <option value="ensathociema">ENSA-Hoceima</option>
                            <option value="ensattetouan">ENSA-Téouan</option>
                            <option value="ensatanger">ENSA-Tanger</option>
                            <option value="encgtanger">ENCG-Tanger</option>
                            <option value="fsthoceima">FST-Hoceima</option>
                            <option value="fsttanger">FST-Tanger</option>
                            <option value="fplarache">FP-Larache</option>
                        </select>
                    </div>
                    <div className="btn-block">
                        <button className="btn-submit" type="submit" href="/">Envoyer</button>
                    </div>
                </form>
            </div>
            <div className="testbox">
                <form id="docForm" action="/">
                    <div className="banner">
                        <h1>Doctorant</h1>
                    </div>
                    <br/>
                    <br/>
                    <div className="colums">
                        <div className="item">
                            <label htmlFor="nom">Nom<span className="required">*</span></label>
                            <input id="nom" type="text" name="nom" required/>
                        </div>
                        <div className="item">
                            <label htmlFor="prenom">Prénom<span className="required">*</span></label>
                            <input id="prenom" type="text" name="prenom" required/>
                        </div>
                        <div className="item">
                            <label htmlFor="emailPerso">Email Personnel<span className="required">*</span></label>
                            <input id="emailPerso" type="text"   name="emailPerso" required/>
                        </div>
                        <div className="item">
                            <label htmlFor="emailInst">Email Institutionnel<span className="required">*</span></label>
                            <input id="emailInst" type="text" name="emailInst" required/>
                        </div>
                        <div className="item">
                            <p>Votre Etablissement<span className="required">*</span></p>
                            <select defaultValue={'DEFAULT'}>    
                                <option value="DEFAULT" disabled ></option>
                                <option value="ensathociema">ENSA-Hoceima</option>
                                <option value="ensattetouan">ENSA-Téouan</option>
                                <option value="ensatanger">ENSA-Tanger</option>
                                <option value="encgtanger">ENCG-Tanger</option>
                                <option value="fsthoceima">FST-Hoceima</option>
                                <option value="fsttanger">FST-Tanger</option>
                                <option value="fplarache">FP-Larache</option>
                            </select>
                        </div>
                        <div className="item">
                            <p>Votre Département<span className="required">*</span></p>
                            <select defaultValue={'DEFAULT'}>    
                                <option value="DEFAULT" disabled ></option>
                                <option value="ensathociema">ENSA-Hoceima</option>
                                <option value="ensattetouan">ENSA-Téouan</option>
                                <option value="ensatanger">ENSA-Tanger</option>
                                <option value="encgtanger">ENCG-Tanger</option>
                                <option value="fsthoceima">FST-Hoceima</option>
                                <option value="fsttanger">FST-Tanger</option>
                                <option value="fplarache">FP-Larache</option>
                            </select>
                        </div>
                        <div className="item">
                            <p>Votre Discipline<span className="required">*</span></p>
                            <select defaultValue={'DEFAULT'}>    
                                <option value="DEFAULT" disabled ></option>
                                <option value="ensathociema">ENSA-Hoceima</option>
                                <option value="ensattetouan">ENSA-Téouan</option>
                                <option value="ensatanger">ENSA-Tanger</option>
                                <option value="encgtanger">ENCG-Tanger</option>
                                <option value="fsthoceima">FST-Hoceima</option>
                                <option value="fsttanger">FST-Tanger</option>
                                <option value="fplarache">FP-Larache</option>
                            </select>
                        </div>
                        <div className="item">
                            <p>Votre Thématique de Recherche<span className="required">*</span></p>
                            <select defaultValue={'DEFAULT'}>    
                                <option value="DEFAULT" disabled ></option>
                                <option value="ensathociema">ENSA-Hoceima</option>
                                <option value="ensattetouan">ENSA-Téouan</option>
                                <option value="ensatanger">ENSA-Tanger</option>
                                <option value="encgtanger">ENCG-Tanger</option>
                                <option value="fsthoceima">FST-Hoceima</option>
                                <option value="fsttanger">FST-Tanger</option>
                                <option value="fplarache">FP-Larache</option>
                            </select>
                        </div>
                    </div>
                    <div className="item">
                        <p>Votre Thématique<span className="required">*</span></p>
                        <select defaultValue={'DEFAULT'}>    
                            <option value="DEFAULT" disabled ></option>
                            <option value="ensathociema">ENSA-Hoceima</option>
                            <option value="ensattetouan">ENSA-Téouan</option>
                            <option value="ensatanger">ENSA-Tanger</option>
                            <option value="encgtanger">ENCG-Tanger</option>
                            <option value="fsthoceima">FST-Hoceima</option>
                            <option value="fsttanger">FST-Tanger</option>
                            <option value="fplarache">FP-Larache</option>
                        </select>
                    </div>
                    <div className="btn-block">
                        <button className="btn-submit" type="submit" href="/">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default Form;