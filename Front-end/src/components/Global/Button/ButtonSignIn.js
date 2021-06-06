/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const Button = () => {
    return (
        <button css={styles}>Sign in</button>
    )
}

const styles = css`
    padding: 8px 200px;
    background: rgb(52, 38, 209);
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    border-radius: 30px;
    `

export default Button;