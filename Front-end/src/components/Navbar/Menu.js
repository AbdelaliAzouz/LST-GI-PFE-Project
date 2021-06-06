/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const Menu = ({ openMenu }) => (
    <div css={styles} className={openMenu ? "menu" : "hidden"}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#statistiques">statistiques</a>
        <a href="#articles">articles</a>
        <a href="#pages">pages</a>
        <a href="#blog">blog</a>
        <a href="#contact">contact</a>
    </div>
);

const styles = css`
  a {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
    color: #13087A;
    margin: 0 22px;
    position: relative;
    transition: color 900ms ease-in-out;
    &::after {
      position: absolute;
      content: "";
      background: #13087A;
      width: 100%;
      height: 3px;
      bottom: -5px;
      left: 0;
      opacity: 0;
      transition: opacity 700ms ease-in-out;
    }
    &:hover {
      color: #000;
      font-weight: 650;
      &::after {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1225px) {
    color:#fff;
    padding: 80px 40px;
    z-index: 30;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 96vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    background-color:#342f69;
    transition: left 600ms ease-in-out, opacity 600ms ease-in-out;
    &.hidden {
      left: -500px;
      opacity: 0;
    }
    a {
      margin: 0 0 20px 0;
      font-size: 25px;
      text-align: left;
      user-select: none;
      color:#fff;
      &:hover {
        color: #d5d3e8;
        &::after {
          opacity:0;
        }
      }
    }
  }
`;

export default Menu;