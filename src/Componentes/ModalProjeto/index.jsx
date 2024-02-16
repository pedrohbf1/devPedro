import styled from "styled-components";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { useEffect } from "react";
import { MdExitToApp } from "react-icons/md";

const ModalProjeto = ({ projeto, setAbrirModal }) => {

    function fecharModal() {
        setAbrirModal(false);
    }

    const handleEscKey = (event) => {
        if (event.key === 'Escape') {
            fecharModal();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    return (
        <ModalContainer onClick={fecharModal}>
            <ModalContent>
                <CloseButton onClick={() => fecharModal()}><MdExitToApp size={24} /></CloseButton>
                <a href={projeto.url}><h2>{projeto.titulo}</h2></a>
                <FotoCapa>
                <a href={projeto.url}>
                    <img src={projeto.imagemCapa} alt={projeto.titulo} />
                </a>
                </FotoCapa>
                <Descricao>
                    <p>{projeto.descricao}</p>
                </Descricao>
                <Tecnologias>
                    <p>Tecnologias:</p>
                    <div>
                        {projeto.linguagens &&
                        projeto.linguagens.map((linguagem, index) => (
                            <li key={index}>{linguagem}</li>
                        ))}
                    </div>
                </Tecnologias>
                <BarraEstilizada />
                <Icones>
                    <a href={projeto.url}>
                        <FaEye size={24} />
                    </a>
                    <a href={projeto.repositorio}>
                        <FaCode size={24} />
                    </a>
                </Icones>
            </ModalContent>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: rgba(255, 255, 255, 0.95); 
    backdrop-filter: blur(5px);
    padding: 20px;
    border-radius: 10px; 
    width: 400px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px; 
    border: 2px solid #4a2cc5;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); 
    max-height: 600px; 
    overflow-y: auto;
    a {
        text-decoration: none;
        color: black;
        transition: 0.5s all; 
        &:hover {
            color: #4a2cc5;
        }
    }
    h2 {
        letter-spacing: 3px;
        font-size: 28px; 
    }
`;

const CloseButton = styled.button`
    position: absolute;
    color: #4a2cc5;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px; 
    cursor: pointer;
`;

const FotoCapa = styled.picture`
  width: 100%;

  a {
    display: block;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05); 
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px; 
    border: 2px solid #4a2cc5;
    aspect-ratio: 16 / 7;
  }
`;

const Descricao = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.25rem;
    color: #525252;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: .14rem;
`;

const Tecnologias = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
    p {
        font-size: 20px;
        letter-spacing: 3px;
    }
    div {
        display: flex;
        gap: 7px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        li {
            padding: 10px;
            background-color: #f2f2f2;
            border-radius: 5px;
            color: #141414;
        }
    }
`;

const Icones = styled.div`
    display: flex;
    justify-content: ${props => props.$index % 2 === 0 ? "flex-end" : "flex-start"};
    gap: 30px;
    margin-top: 10px; 
    align-items: center;
    justify-content: center;
    a {
        color: black;
        padding: 5px;
        border: 1px solid black;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        display: flex;
        transition: 0.3s all;
        &:hover {
            color: #4a2cc5;
            border: 1px solid #4a2cc5;
        }
    }
    
    @media (max-width: 1100px) {
        margin-top: 30px;
    }
`;

const BarraEstilizada = styled.span`
    width: 100%;
    border-bottom: solid 1px #121212;
`;

export default ModalProjeto;

