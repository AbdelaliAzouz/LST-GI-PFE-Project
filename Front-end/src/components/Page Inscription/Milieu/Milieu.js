import './MilieuCSS.css';
/* import '../Form/Form';
 */import { Link } from 'react-router-dom'

function MilieuInscription() {
    return(
        <div>
            <div className="milieu"  >
                <div className="description">
                    Vous êtes :
                </div>
                <div className="EnsBtn">
                    <Link to='/Inscription/EnsForm'>
                        <a className="aForMilieu cta" href="#ensForm">
                            <span className="spanFormMilieu">Enseignant</span>
                            <svg   width="13px" height="10px" viewBox="0 0 13 10">
                                <path   d="M1,5 L11,5"></path>
                                <polyline   points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                    </Link>
                    
                </div>
                <div className="DocBtn">
                    <Link to='/Inscription/DocForm'>
                        <a className="aForMilieu cta" href="#docForm">
                        <span className="spanFormMilieu">doctorant</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MilieuInscription;
