/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Container from "../Global/Container";
import Button from "../Global/Button/Button";

// Background Image
import bg6 from "../../images/bg6.jpg";
import bg6png from "../../images/bg6png.png";

const Sale = () => {
    return (
        <section className="saleSection" css={styles}>
            <Container>
                <div className="wrapper" >
                    <h3>
                        A PROPS DE NOTRE <br></br>
                        PLATEFORME</h3>
                    <p>
                        Nous aidons les étudiants à trouver et comparer des projets
                        et programmes de recherche doctorale depuis plus de 15 ans.
                        En plus de répertorier les opportunités de doctorat et les bourses,
                        nous fournissons également un large éventail de conseils sur la recherche et le financement
                        de troisième cycle .
                    </p>
                    <Button contenu="LIRE DES ARTICLES"/>
                </div>
            </Container>
            <img  src={bg6png} alt="png bg"/> 
        </section>
    )
}

const styles = css`
    width: 100%;
    background: url('${bg6}') no-repeat center/cover;
    padding: 200px 0;
    img{
        width:0%;
    }
    .container {
        display: flex;
        max-width: 1200px;
        justify-content: flex-end;
        .wrapper {
            h3 {
                color: black;
                font-size: 2.6rem;
            }
            p {
                padding: 10px 0px 0;
                max-width: 500px;
                color: black;
            }
        }
    }
    @media(max-width: 868px) {
        width: 100%;
           background:none;
           background-color:#CAD4EF;
        padding: 200px 0;
        .container {
            display: flex;
            max-width: 1200px;
            justify-content: flex-end;
            .wrapper {
                h3 {
                    color: black;
                    font-size: 2.6rem;
                }
                p {
                    padding: 10px 0px 0;
                    max-width: 500px;
                    color: black;
                }
            }
        }
        img{
            width:100%;
            margin-top:100px;
        }
    }
`;

export default Sale;