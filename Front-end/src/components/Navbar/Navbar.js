/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useState } from "react";
import Container from "../Global/Container";
import Logo from "./NavbarLogo";
import Button from "../Global/Button/Button";
import { Link } from 'react-router-dom'
import Axios from 'axios'

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);
  
  // Créer un Admin aprés qu'on clique sur le bouton ESPACE ADMIN
  const [ nomAdmin, setNomAdmin ] = useState("")
  const [ prenomAdmin, setPrenomAdmin ] = useState("")
  const [ emailAdmin, setEmailAdmin ] = useState("")
  const [ mdpAdmin, setMdpAdmin ] = useState("")
  const creerAdmin = () =>{
    Axios.post('http://localhost:3001/creerAdminAuto')
  }
  
    return (
        <nav css={styles}>
            <Container>
                <Logo />
                <div>
                  <Link to='/Inscription'>
                    <Button contenu="Créer un compte" />
                  </Link>
                  <Link to='/EspaceAdmin'>
                    <button
                      css={styles2}
                      onClick={() => { creerAdmin();}}
                    >
                      Espace Admin
                    </button>
                  </Link>
                </div>
            </Container>
        </nav>
    );
};

const styles2 = css`
    padding: 10px 20px;
    margin-bottom: 5px;
    background: #163c63;
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    float: right;
`
const styles = css`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
  padding: 0 0;
  .container {
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
    #burgerMenu {
      cursor: pointer;
      display: none;
      color: #0A4398;
    }
  }
  @media (max-width: 1200px) {
    .container {
      max-width: 1200px;
      button {
        padding:10px;
      }
      #burgerMenu {
        display: block;
      }
    }
    
  }
`;

export default Navbar;