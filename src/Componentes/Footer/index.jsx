import styled from "styled-components"

const Footer = () => {
    return (
        <FooterEstilizado>
            &#169; Code by Pedro Henrique
        </FooterEstilizado>
    )
}

const FooterEstilizado = styled.footer`
    width: 100%;
    background-color: black;
    padding: 20px;
    margin: 0 auto;
    color: #b4b4b4;
    align-items: center;
    justify-content: center;
    display: flex;
    box-sizing: border-box;
`

export default Footer