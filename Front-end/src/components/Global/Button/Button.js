/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const Button = (props) => {
    return (
        <button css={styles}>{props.contenu}</button>
    )
}

const styles = css`
    padding: 18px 50px;
    background: rgb(52, 38, 209);
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    outline: none;
`

export default Button;