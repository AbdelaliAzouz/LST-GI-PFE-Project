/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const Button = () => {
    return (
        <button css={styles}>Lire des Articles</button>
    )
}

const styles = css`
    padding: 16px 40px;
    background: rgb(52, 38, 209);
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    outline: none;
`

export default Button;