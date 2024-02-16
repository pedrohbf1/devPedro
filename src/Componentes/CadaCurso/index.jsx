import styled from "styled-components"

const CadaCurso = ({ curso }) => {

    return (
        <QuadradoCurso>
            <h3>{curso.modalidade}</h3>
            <TitleEstilizado><strong>{curso.nomeCurso}</strong> - {curso.localCurso}</TitleEstilizado>
            <p>{curso.descricao}</p>
            <p>{curso.dataCurso}</p>
        </QuadradoCurso>
    )
}

const QuadradoCurso = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 25px;
    background-color: #0a0a0a;
    border: 1px solid #6c6c6c;
    border-radius: 5px;
    padding: 20px;
    transition: 0.5s ease;
    min-width: 200px;
    h3 {
        font-size: 1.45rem;
        letter-spacing: 4px;
        color: #CCC;
    }
    :nth-child(3) {
        font-size: 1rem;
        color: #F0F0F0;
    }
    :nth-child(4) {
        font-size: 1.25rem;
        color: #F0F0F0;
    }
    &:hover {
        transform: scale(1.3);
    }
    @media (max-width: 530px ) {
        &:hover {
            transform: scale(1.0);
        }
    }
`

const TitleEstilizado = styled.p`
    font-size: 1rem;
    color: #F0F0F0;
    font-family: "UbuntuMedium";
    strong {
        color: #CCC;
        font-family: "UbuntuBold";
        font-size: 1.5rem;
    }
`

export default CadaCurso