/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Container from "../Global/Container";

// Background Image
import bg7 from "../../images/bg7.jpg";
import bg7png from "../../images/bg7png.png";

const Sale2 = () => {
    return (
        <section className="saleSection" css={styles}>
            <Container>
                <div className="wrapper" >
                    <h3>COLLABORATION AVEC<br></br>
                     AUTRES CHERCHEURS</h3>
                    <p>Cette plateforme, peut aider les chercheurs qui ont besoin 
                        d’une collaboration à trouver ce qu’ils cherchent sans complication
                         et en peu de temps. Ils peuvent trouver d’autres chercheurs travaillent
                          sur le même thématique, des articles scientifiques, identifier l’état de
                           la recherche scientifique au sein d’un institution particulière, etc..</p>
                </div>
            </Container>
            <img  src={bg7png} alt="png bg"/> 
        </section>
    )
}

const styles = css`
    width: 100%;
    background: url('${bg7}') no-repeat center/cover;
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

    @media(max-width: 768px) {
        width: 100%;
        background:none;
        background-color:#5754BF;
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

export default Sale2;