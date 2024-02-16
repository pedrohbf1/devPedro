import styled from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"
import Header from "./Componentes/Header"
import SobreMim from "./Paginas/Sobre"
import Projetos from "./Paginas/Projetos"
import Formação from "./Paginas/Formação"
import Contato from "./Paginas/Contato"
import Footer from "./Componentes/Footer"
import { LuMoveUp } from "react-icons/lu";
import { useState } from "react"

function App() {

  return (
    <>
    <EstilosGlobais />    
    <Centralizador>
      <Header />
      <SobreMim />
      <Projetos/>
    </Centralizador>
    <Formação />
    <Contato />
    <Footer />
    </>
  )
}

const Centralizador = styled.main`
  max-width: 1200px;
  margin: 0 auto -20px;
  padding: 40px 20px;
`

const HeaderDarkMode = styled.header`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`

export default App
