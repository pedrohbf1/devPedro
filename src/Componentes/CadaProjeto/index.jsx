import styled from "styled-components";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { useState } from "react";
import ModalProjeto from "../ModalProjeto";

const CadaProjeto = ({ projeto, index }) => {

  const [abrirModal, setAbrirModal] = useState(false)

  function abriModal () {
    setAbrirModal(true)
  }

  const flexDirectionStyle = index % 2 === 0 ? "row" : "row-reverse";

  return (
    <ListaProjeto>
      <ProjetoDetalhes $index={index}>
        <main>
          <a href={projeto.url}>
            <h2>{projeto.titulo}</h2>
          </a>
          <p>{projeto.descricao.length > 150 ? `${projeto.descricao.substring(0, 150)}...` : projeto.descricao}</p>
          <Linguagens>
            {projeto.linguagens &&
              projeto.linguagens.slice(0, 3).map((linguagem, index) => (
                <li key={index}>{linguagem}</li>
              ))}
              {projeto.linguagens && projeto.linguagens.length > 3 && (
              
              <StyledLi flexDirectionStyle={flexDirectionStyle}  onClick={() => abriModal()}>...</StyledLi>
              )}
          </Linguagens>
        </main>
        <Icones $index={index}>

          <button onClick={() => abriModal()} >Ver mais</button>

          <div>
            <a href={projeto.url}>
              <FaEye size={25} />
            </a>
            <a href={projeto.repositorio}>
              <FaCode size={25} />
            </a>
          </div>
        </Icones>
      </ProjetoDetalhes>

      <FotoCapa>
        <a href={projeto.url}>
          <img src={projeto.imagemCapa} alt={projeto.titulo} />
        </a>
      </FotoCapa>
      {abrirModal && <ModalProjeto projeto={projeto} setAbrirModal={setAbrirModal} />}
    </ListaProjeto>
  );
};

const ListaProjeto = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  box-sizing: border-box;
  height: 100%;

  @media (max-width: 1330px) {
    padding: 0 70px 0 0;
  }

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;


const ProjetoDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  text-align: ${props => (props.$index % 2 === 0 ? "right" : "left")}; 

  main {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 15px;
    align-items: ${props => (props.$index % 2 === 0 ? "flex-end" : "flex-start")};

    @media (max-width: 1000px) {
      align-items: center;
    }

    a {
      text-decoration: none;
      color: #141414;
      font-size: 1.3rem;
      letter-spacing: 3px;
      cursor: pointer;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #4a2cc5;
      }
    }

    p {
      font-size: 1.25rem;
      color: #525252;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      letter-spacing: .14rem;
      @media (max-width: 1330px) {
        display: none;
      }
    }
  }

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  ${ListaProjeto}:nth-child(odd) & {
    order: -1; 
  }

  ${ListaProjeto}:nth-child(even) & {
    order: 1; 
  }

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    ${ListaProjeto}:nth-child(odd) & {
      order: 1; 
    }

    ${ListaProjeto}:nth-child(even) & {
      order: 1; 
    }
  }
`;

const Linguagens = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1000px) {
    display: none;
  }

  li {
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 5px;
  }
  
`;

const Icones = styled.div`
display: flex;
justify-content: space-between;
flex-direction: ${props => props.$index % 2 === 0 ? "row" : "row-reverse"};

@media (max-width: 1000px) {
  margin-top: 15px;
  flex-direction: row;
  gap: 20px;
}

button {
  padding: 10px;
  background-color: white;
  border: 1px solid #4a2cc5;
  border-radius: 5px;
  letter-spacing: 3px;
  transition: 0.5s all;
  cursor: pointer;
  &:hover {
    background-color: #4a2cc5;
    color: white;
  }
}
  div {
  display: flex;
  justify-content: ${props => props.$index % 2 === 0 ? "flex-end" : "flex-start"};
  gap: 30px;
  margin-top: auto; 
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
  }
`;

const FotoCapa = styled.picture`
  width: 100%;

  a {
    display: block;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.10);
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    border: 1px solid #4a2cc5;
    aspect-ratio: 16 / 7;
  }
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    display: flex;
    img {
      width: 500px;
      height: 300px;
      object-fit: cover;
    }
  }
`;

const StyledLi = styled.li`
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  order: ${(props) => (props.flexDirectionStyle === "row" ? -1 : 1)};
  transition: 0.5s ease;

  &:hover {
    background-color: #4a2cc5;
    color: white;
  }
`

export default CadaProjeto;