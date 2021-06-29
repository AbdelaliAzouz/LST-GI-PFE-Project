import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, FormControl, Form } from 'react-bootstrap'
import logoReact from '../../../images/logoReact.png'
import SearchIcon from '@material-ui/icons/Search';
import './Navbar22.css'
import Axios from 'axios'


const Navbar2 = () => {  

  const logout = () =>{
    Axios.post('http://localhost:3001/logout', { 
})
}

    return(
        <div className="Navbar2">
<Navbar  expand="lg" className="Navbar2">
  <a href="/Accueil"><img className="logoReact" src={logoReact} alt="logo"/></a>
  <Navbar.Brand href="#" id="Research">Research plateforme</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '400px' }} 
      navbarScroll
    >
      <Nav.Link href="/Accueil" className="navig"><i className="fas fa-home"></i><div className="label">Accueil</div></Nav.Link>
      <Nav.Link href="/profile" className="navig"><i class="fas fa-user-alt"></i><div className="label">Profil</div></Nav.Link>
      <Nav.Link href="/Etablissements" className="navig"><i className="fas fa-university"></i><div className="label">Etablissements</div></Nav.Link>
      <Nav.Link href="/Labos" className="navig"><i class="fas fa-microscope"></i><div className="label">Laboratoires</div></Nav.Link>
      <Nav.Link href="Thematiques" className="navig"><i className="fas fa-newspaper"></i><div className="label">Thématiques</div></Nav.Link>
      <Nav.Link href="/About" className="navig"><i className="fas fa-lightbulb"></i><div className="label">A_propos</div></Nav.Link>
    </Nav>
   {/*  <Nav.Link href="#action6" className="profil"><Avatar alt="Abdelali Azouz" src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg" className="Avatar"/>

    </Nav.Link> */}
    <a href="/">
    <div className="dec">
      <i class="fas fa-power-off fa-lg" ></i>
      <p className="logout">logout</p>
    </div>
    </a>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Chercher"
        className="mr-2"
        aria-label="Search"
      />
      <a href="/"><SearchIcon className="Search_icon"/></a>
    </Form>
  </Navbar.Collapse>
</Navbar>

      </div>
    );
};

export default Navbar2;

                  