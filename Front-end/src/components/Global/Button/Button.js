/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const Button = (props) => {
    return (
        <button css={styles1}>{props.contenu}</button>
    )
}

const styles1 = css`
    padding: 10px 20px;
    margin-bottom: 5px;
    background: rgb(52, 38, 209);
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    float: right;
`

export default Button;