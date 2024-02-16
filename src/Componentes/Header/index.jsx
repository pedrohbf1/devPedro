import styled, { keyframes } from "styled-components";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";

const Header = ( ) => {

  const [headerMobile, setHeaderMobile] = useState(false)

  function abrirHeaderMobile () {
    setHeaderMobile(!headerMobile)
  }

  return (
    <HeaderEstilizado >
      <h1><span>dev</span> Pedro Henrique</h1>
      <nav>
        <ul>

          <li>
            <LinkEstilizado href="#sobre-mim">Sobre mim</LinkEstilizado>
          </li>

          <li>
            <LinkEstilizado href="#projetos">Projetos</LinkEstilizado>
          </li>

          <li>
            <LinkEstilizado href="#formacao">Formação</LinkEstilizado>
          </li>

          <li>
            <LinkEstilizado href="#contato">Contato</LinkEstilizado>
          </li>
          
        </ul>
      </nav>
      <HeaderMobile onClick={() => abrirHeaderMobile()}>
        <IoReorderThree size={50}/>
        {headerMobile && 
          <NavEstilizado>
            <LinkEstilizado href="#sobre-mim">Sobre mim</LinkEstilizado>
            <LinkEstilizado href="#projetos">Projetos</LinkEstilizado>
            <LinkEstilizado href="#formacao">Formação</LinkEstilizado>
            <LinkEstilizado href="#contato">Contato</LinkEstilizado>
          </NavEstilizado>
        }
      </HeaderMobile>
    </HeaderEstilizado>
  );
};

const HeaderEstilizado = styled.header`
    width: 100%;
    padding: 40px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    h1 {
      font-size: 40px;
      letter-spacing: 5px;
      transition: transform 0.3s ease; 
      &:hover {
        transform: translateY(-10px);    
      }
    }
    span {
      font-size: 30px;
      letter-spacing: 3px;
      color: #412cc5;
      margin-right: -9px;
    }
    nav {
        display: block;
        ul {
            list-style-type: none; 
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
        }
    }
    @media (max-width: 1300px) {
        nav {
            transform: translateX(-5%);
        }
    }
    @media (max-width: 983px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 610px) {
      nav {
        display: none;
      }
    }
`

const LinkEstilizado = styled.a`
    position: relative;
    text-decoration: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #141414;
    font-size: 1.125em;
    line-height: 1.3rem;
    letter-spacing: 0.5px;
    padding: 0 3px;
    transition: all 0.3s;
    &::after {
        content: "";
        position: absolute;
        background-color: #4a2cc5;
        height: 2px;
        width: 0;
        left: 0;
        bottom: -5px;
        transition: 0.5s;
    }
    &:hover::after {
        width: 100%;
    }
    &:hover {
        color: #4a2cc5;
    }
    @media (max-width: 983px) {
      background-color: #f5f5f5;
      border-radius: 5px;
      padding: 10px;
    }
`

const HeaderMobile = styled.header`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  display: none;
  @media (max-width: 610px) {
    display: flex;
    flex-direction: column;
  }
`

const NavEstilizado = styled.section`
  display: flex;
  width: 80%;
  gap: 35px;
  flex-direction: column;
  a {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

export default Header;
