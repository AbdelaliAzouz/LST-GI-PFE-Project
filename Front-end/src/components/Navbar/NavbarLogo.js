/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import logo from "../../images/UaeLogo.png"


const NavbarLogo = () => {
    return (
        <img src={logo} alt="UAE LOGO" css={styles} />
    )
}

const styles = css`
width:110px;  
margin-top:10px;
`

export default NavbarLogo;