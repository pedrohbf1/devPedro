import styled, { keyframes } from "styled-components";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import ModalOrcamento from "../../Componentes/ModalOrcamento";
import Typical from "react-typical";

const Contato = () => {

    const [modalOrcamento, setModalOrcamento] = useState(false);
    const fullText = "Estou aberto para novos projetos. Entre em contato para agendarmos uma conversa e discutirmos oportunidades de colaboração.";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                return newIndex;
            });
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    const displayedText = fullText.slice(0, index);
    const blinkingCursor = index < fullText.length ? '|' : '';

    return (
        <Background>
            <Centralizador id="contato">
                <Divisor>
                    <Line color="#4a2cc5" />
                    <Line color="#2c7ec5" marginTop="10px" width="80" />
                    <TypedText>
                        {displayedText}
                        <BlinkingCursor>{blinkingCursor}</BlinkingCursor>
                    </TypedText>
                </Divisor>
                <NavEstilizada>
                    <ul>
                        <li>
                            <a href="mailto:contactdevpedro@gmail.com">
                                <MdEmail size={23} color="#ccc" /> contactdevpedro@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send/?phone=5537991453323&text&type=phone_number&app_absent=0">
                                <BsFillTelephoneFill  size={23} color="#ccc"/> +55 37 99145-3323
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/pedro-henrique-2a861827b/">
                                <FaLinkedin  size={23} color="#ccc" /> Linkedin
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/pedrohbf1">
                                <FaGithub  size={23} color="#ccc" /> Github
                            </a>
                        </li>
                        <li>
                            <button onClick={() => setModalOrcamento(!modalOrcamento)} >
                                <MdPriceChange size={35} /> Faça seu orçamento on-line
                            </button>
                        </li>
                    </ul>
                </NavEstilizada>
                {modalOrcamento && <ModalOrcamento setModalOrcamento={setModalOrcamento} />}
            </Centralizador>
        </Background>
    );
};

const blink = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const BlinkingCursor = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  animation: ${blink} 0.8s infinite;
`;

const Background = styled.main`
    width: 100%;
    background-color: black;
    border-bottom: solid 1px #121212;
    box-sizing: border-box;
`;

const Centralizador = styled.header`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 40px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    @media (max-width: 780px) {
        flex-direction: column;
        gap: 50px;
        
    }
`;

const Divisor = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 300px;
    box-sizing: border-box;
    @media (max-width: 1050px ) {
        padding-right: 100px;
        box-sizing: border-box;
    }
    @media (max-width: 830px ) {
        padding-right: 50px;
        box-sizing: border-box;
    }
    p {
        color: white;
        letter-spacing: 3px;
        margin-top: 30px;
        box-sizing: border-box;
    }
`;

const Line = styled.div`
    width: ${({ width }) => width ? `${width}px` : '120px'};
    height: 3px;
    background-color: ${({ color }) => color || 'white'};
    margin-top: ${({ marginTop }) => marginTop || '0'};
`;

const TypedText = styled.p`
  color: white;
  letter-spacing: 3px;
  margin-top: 30px;
  box-sizing: border-box;
`;

const NavEstilizada = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    transition: 3s ease;
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 0;
        flex-grow: 1;
        li {
            color: white;
            display: flex;
            align-items: center;
            letter-spacing: 2px;
            width: 100%;
            a {
                color: white;
                text-decoration: none;
            }
            svg {
                margin-right: 10px;
            }
        }
        :nth-child(5) {
            button {
                margin-top: 35px;
                background-color: white;
                letter-spacing: 3px;
                border: none;
                padding: 25px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: 1s all;
                box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
`;

export default Contato;
