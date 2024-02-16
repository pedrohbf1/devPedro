import styled from "styled-components"
import CadaCurso from "../../Componentes/CadaCurso/index.jsx";
import objetoCursos from "../../ObjetosUsados/Cursos/index.jsx";

const Formação = () => {

    return (
        <Background>
            <Centralizador id="formacao">
                <h1>Formação</h1>
                <SecaoCurso>
                    {objetoCursos && objetoCursos.map((curso, index) => {
                        return <CadaCurso key={index} curso={curso} />
                    })}
                </SecaoCurso>
                <DivSkill>
                    <h3>Hard skills</h3>
                    <section>
                        <div>
                            <p>React.js</p>
                            <p>Firebase</p>
                            <p>Node.js</p>
                            <p>MySQL</p>
                        </div>
                        <div>
                            <p>JavaScript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Git/Github</p>
                        </div>
                    </section>
                </DivSkill>
                <DivSkill>
                    <h3>Soft skills</h3>
                    <section>
                        <div>
                            <p>Resolução de problemas</p>
                            <p>Trabalho em equipe</p>
                            <p>Criatividade</p>
                            <p>Flexibilidade</p>
                        </div>
                        <div>
                            <p>Curiosidade</p>
                            <p>Atençao para ouvir</p>
                            <p>Agilidade de aprendizado</p>
                            <p>Princípios éticos</p>
                        </div>
                    </section>
                </DivSkill>
                <DivSkill>
                    <h3>Idioma</h3>
                    <section>
                        <div>
                            <p><strong>Inglês</strong> / Básico</p>
                            <p><strong>Espanhol</strong> / Básico</p>
                            <p><strong>Português</strong> / Nativo</p>
                        </div>
                    </section>
                </DivSkill>
            </Centralizador>
        </Background>
    )
}

const Background = styled.main`
    width: 100%;
    background-color: #141414;
    box-sizing: border-box;
`

const Centralizador = styled.header`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px 40px 20px;
    box-sizing: border-box;
    h1 {
      font-size: 6rem;
      text-transform: uppercase;
      &::after {
        display: inline-block;
        content: "";
        width: 15px;
        height: 15px;
        background-color: #4a2cc5;
        border-radius: 50%;
        margin-left: 5px;
        transition: 0.7s ease;
      }
      &:hover::after {
        transform: translateY(-40px); 
      }
      &:not(:hover)::after {
        transform: translateY(0px); 
      }
        @media (max-width: 615px) {
            font-size: 5rem;
        }
        @media (max-width: 515px) {
            font-size: 4rem;
        }
        @media (max-width: 420px) {
            font-size: 3rem;
        }
        @media (max-width: 330px) {
            font-size: 2rem;
        }
        @media (max-width: 242px) {
            font-size: 1.5rem;
        }
    }
`

const SecaoCurso = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    gap: 50px;
    box-sizing: border-box;
    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
`

const DivSkill = styled.div`
    width: 100%;
    padding: 20px;
    margin-top: 50px;
    box-sizing: border-box;
    h3 {
        color: #ccc;
        font-size: 1.25rem;
        position: relative;
        
        letter-spacing: .14rem;
        margin-left: 20px;
        z-index: 1;
        transition: 0.5s ease;
        &:hover {
            margin-left: 40px; /* Ajuste o valor de margin-left para empurrar o h3 durante a animação */
        }
        &::before {
            content: "";
            position: absolute;
            background-color: #4a2cc5;
            height: 20px;
            width: 10px;
            left: -20px;
            bottom: 3.9px;
            transition: 0.5s;
            z-index: -1;
        }

        &:hover::before {
            transform: translateX(-20px); 
            width: 30px;
        }
    }
    
    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
        margin: 20px 0;
        box-sizing: border-box;
        div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            transition: 0.5s ease-in-out;
            box-sizing: border-box;
            &:hover {
                transform: scale(1.05);
            }
            p {
                font-size: 1.5rem;
                line-height: 2.25rem;
                color: white;
                strong {
                    font-family: "UbuntuBold";
                }
            }
        }
    }
`

export default Formação