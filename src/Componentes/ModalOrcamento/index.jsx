import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdExitToApp } from "react-icons/md";
import emailjs from '@emailjs/browser'

const ModalOrcamento = ({ setModalOrcamento }) => {
    const [detalhesProjeto, setDetalhesProjeto] = useState('');
    const [maximoAtingido, setMaximoAtingido] = useState(false);
    const [concluido, setConcluido] = useState(false)
    const [incompleto, setIncompleto] = useState(false)

    const maxCaracteres = 5000;

    function fecharModal() {
        setModalOrcamento(false);
    }

    const handleDetalhesProjetoChange = (event) => {
        const value = event.target.value;
        setDetalhesProjeto(value);
    };

    useEffect(() => {
        setMaximoAtingido(detalhesProjeto.length === maxCaracteres);
    }, [detalhesProjeto]);

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
          fecharModal();
        }
    };

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

    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [email, setEmail] = useState("")
    const [orcamento, setOrcamento] = useState("")

    function enviaFormulario (e) {
        e.preventDefault()
        if(nome == "" || email == "" || detalhesProjeto == "") {
            setIncompleto(true)
            return
        } else {
            const templateParams = {
                from_name: nome,
                brand: marca,
                email: email,
                budget: orcamento,
                message: detalhesProjeto
            }
    
            emailjs.send("service_y46ijii", "template_41bc2mv", templateParams, "tyvwKsI0qV4cxXXqB" )
            .then((response) => {
                setNome("")
                setEmail("")
                setMarca("")
                setOrcamento("")
                setDetalhesProjeto("")
                setConcluido(true)
            })
        }
    }

    return (
        <ModalContainer onClick={handleClickOutside}>
            <ModalContent>
                <CloseButton onClick={() => fecharModal()}><MdExitToApp size={20} /></CloseButton>
                {!concluido ?
                <>
                <Title>Entre em contato comigo</Title>
                <Subtitle>Faça seu orçamento online</Subtitle>
                    <Form>
                    <Label htmlFor="nome">Nome:</Label>
                    <Input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <Label htmlFor="marca">Sua Marca:</Label>
                    <Input type="text" id="marca" name="marca" value={marca} onChange={(e) => setMarca(e.target.value)}/>

                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <Label htmlFor="orcamento">Orçamento:</Label>
                    <InputGroup>
                        <CurrencySymbol>R$</CurrencySymbol>
                        <Input
                            type="text"
                            id="orcamento"
                            name="orcamento"
                            value={orcamento}
                            onChange={(e) => setOrcamento(e.target.value)}
                            onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
                        />
                    </InputGroup>

                    <Label htmlFor="detalhes">Detalhes do Projeto:</Label>
                    <Textarea
                        id="detalhes"
                        name="detalhes"
                        maxLength={maxCaracteres}
                        value={detalhesProjeto}
                        onChange={handleDetalhesProjetoChange}
                    />
                    
                    <ContadorCaracteres maximoAtingido={maximoAtingido}>
                        {detalhesProjeto.length}/{maxCaracteres}
                    </ContadorCaracteres>
                    {incompleto && <p style={{textAlign: "center", marginBottom: "10px", color: "red"}}>Preencha todos os campos</p>}
                    <SubmitButton onClick={(e) => enviaFormulario(e)}>Enviar mensagem</SubmitButton>
                </Form>
                </>
                :
                <>
                <Title>Orçamento enviado com sucesso</Title>
                <Subtitle>Oque deseja fazer agora ? </Subtitle>
                <SpanEstilizado>
                    <button onClick={() => setConcluido(false)}>Fazer outro orçamento</button>
                    <button onClick={() => fecharModal()}>Voltar para o site</button>
                </SpanEstilizado>
                </>
                }
            </ModalContent>
        </ModalContainer>
    );
};

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
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid #4a2cc5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    @media (max-width: 425px) {
        width: 300px;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    color: #4a2cc5;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1px;
    cursor: pointer;
`;

const Title = styled.h2`
    color: black;
    text-transform: uppercase;
`;

const Subtitle = styled.p`
    color: #4a2cc5;
    font-size: 14px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 20px;
`;

const Label = styled.label`
    margin-bottom: 5px;
    color: #333;
`;

const Input = styled.input`
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const InputGroup = styled.div`
    
    input {
        width: 84%;
        @media (max-width: 425px) {
        width: 79%;
        }
        @media (max-width: 332px) {
            width: 78%;
        }
    }
    @media (max-width: 319px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const CurrencySymbol = styled.span`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    background-color: #f1f1f1;
    margin-right: 5px;
`;

const Textarea = styled.textarea`
    padding: 8px;
    height: 120px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
`;

const SubmitButton = styled.button`
    background-color: #4a2cc5;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
        transform: scale(1.05);
    }
`;


const ContadorCaracteres = styled.div`
    color: ${props => (props.maximoAtingido ? "red" : "black")};
    font-size: 12px;
    margin-top: -15px;
    margin-bottom: 30px;
`;


const SpanEstilizado = styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    button {
        background-color: #4a2cc5;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.5s ease;
        &:hover {
            transform: scale(1.05);
        }
    }
`

export default ModalOrcamento;
