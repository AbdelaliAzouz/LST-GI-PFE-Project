/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Container from "../Global/Container";
import FooterCard from "./FooterCard";

const Footer = () => {
    return (
        <footer css={styles}>
            <Container>
                <FooterCard cardHeading="Contactez nous">
                    <div className="firstCard">
                        <p>a.zouhair@uae.ac.ma</p>
                        <p>yahya.rechaki@etu.uae.ac.ma</p>
                        <p>abdelali.azouz@etu.uae.ac.ma</p>
                    </div>
                </FooterCard>
                <FooterCard cardHeading="Liens Utiles">
                    <div className="usefulLinks">
                        <a href="https://www.uae.ma/website/node/41">UAE</a>
                        <a href="https://www.cnrst.ma/index.php/fr/">Centre National de la recherche Scientifique et technique</a>
                        <a href="https://www.csefrs.ma/">Conseil Supérieur de l'enseignement  </a>
                    </div>
                </FooterCard>
                <FooterCard cardHeading="Retrouvez nous sur">
                    <p style={{color:'white'}}>Nous sommes sur les réseaux sociaux. Suivez-nous.</p>
                    <div className="social">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                </FooterCard>
            </Container>
            <div className="copyright">
                <p>© UNIVERSITÉ ABDELMALEK ESSAADI 2021 - TOUS DROITS RÉSERVÉS.</p>
            </div>
        </footer>
    )
}

const styles = css`
    width: 100%;
    background: #232345;
    .container {
        padding: 10px 0;
        max-width: 1200px;
        display: flex;
        border-bottom: 1px solid rgb(26, 26, 26);
        justify-content: space-between;
    }
    .footerCard {
        .firstCard {
            display: flex;
            flex-direction: column;
            padding: 25px 0 0 0;
            p {
                color: #ccc;
            }
        }
        .usefulLinks {
            padding: 10px 0 0 0;
            display: flex;
            flex-direction: column;
            a {
                color: #a5b0c2;
                padding: 10px 0 0 0;
                transition: 400ms ease-in-out;
                &:hover {
                    color: yellow;
                }
            }
        }
            .social {
                display: flex;
                padding: 40px 0 0 0;
                i {
                    color: #ccc;
                    margin: 0 10px 0 0;
                    cursor: pointer;
                    transition: all 300ms ease-in-out;
                    &:hover {
                        color: black;
                    }
                }
            }
    }
    .copyright {
        p {
            padding: 10px 0;
            color: #ccc;
            text-align: center;
            i {
                color: red;
                cursor: pointer;
            }
        }
    }

    @media(max-width: 700px) {
        .container {
            padding: 100px 0;
            flex-wrap: wrap;
            .footerCard {
                max-width: 200px;
                /* border: 1px solid green; */
                &:nth-of-type(3) {
                    max-width: 400px;
                    padding: 30px 0 0 0;
                }
            }
        }
        .copyright {
            max-width: 400px;
            margin: 0 auto;
        }
    }
    @media (min-width: 701px) and (max-width: 1000px) {
        .container {
            padding: 100px 0;
            flex-wrap: wrap;
            .footerCard {
                max-width: 300px;
                &:nth-of-type(3) {
                    max-width: 400px;
                    padding: 30px 0 0 0;
                }
            }
        }
    }
    @media (min-width: 1001px) and (max-width: 1200px) {
        .container {
            padding: 100px 0;
            flex-wrap: wrap;
            .footerCard {
                max-width: 100px;
                &:nth-of-type(3) {
                    max-width: 400px;
                    padding: 30px 0 0 0;
                }
            }
        }
    }
`

export default Footer;