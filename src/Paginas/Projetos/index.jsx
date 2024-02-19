import styled, { keyframes } from "styled-components";
import CadaProjeto from "../../Componentes/CadaProjeto/index.jsx";
import { FaArrowRight } from "react-icons/fa";
import objetoProjetos from "../../ObjetosUsados/Projetos/index.jsx";
import { useRef } from "react";
import { useState } from "react";

const Projetos = () => {

    return (
        <MainEstilizado id="projetos">
            <TituloEstilizado>Projetos</TituloEstilizado>
            <SubTitulo>
                <p>Arraste pro lado</p>
                <FaArrowRight size={20} color="#4a2cc5"/>
            </SubTitulo>
            <SecaoProjetos>
                <ul>
                    {objetoProjetos && objetoProjetos.map((projeto, index) => (
                        <CadaProjeto key={index} index={index} projeto={projeto} />
                    ))}
                </ul>
            </SecaoProjetos>
        </MainEstilizado>
    );
};

const MainEstilizado = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    box-sizing: border-box;
    gap: 30px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const TituloEstilizado = styled.h2`
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-top: 30px;
    &::after {
        content: "";
        display: block;
        width: 100px;
        height: 4px;
        background-color: #4a2cc5;
        margin-top: 10px;
        transition: 0.3s all;
    }
    &:hover::after {
        width: 210px;
    }
`;

const SecaoProjetos = styled.div`
    width: 100%;
    display: block;
    margin: 15px 0;
    box-sizing: border-box;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        gap: 90px;
        @media (max-width: 1000px) {
            overflow-x: auto;
            flex-direction: row;
            margin: -30px 0;
        }
    }
`;

const slideAnimation = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const SubTitulo = styled.section`
    display: flex;
    margin: 0;
    display: none;

    svg {
        animation: ${slideAnimation} 1s linear infinite; 
    }

    @media (max-width: 1000px) {
        display: flex;
        gap: 20px;
    }

    p {
        color: #4a2cc5;
        text-transform: uppercase;
        letter-spacing: 0.8px;
    }
`;

export default Projetos;
