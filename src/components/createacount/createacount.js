import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './createacount.css'

function CreateACC() {
    const [nome, saveNome] = useState('');
    const [email, saveEmail] = useState('');
    const [senha, saveSenha] = useState('');

    const navigate = useNavigate(); // Mova useNavigate para fora da função Navigate

    const HandleNome = (e) => {
        saveNome(e.target.value)
    }
    const HandleEmail = (e) => {
        saveEmail(e.target.value)
    }
    const HandleSenha = (e) => {
        saveSenha(e.target.value)
    }

    const handleRegisterDados = async() => {
        const Bases = {
            Nome: nome,
            Email: email,
            Senha: senha,
        }

        await axios.post("http://localhost:5000/dados", {
            Nome: Bases.Nome,
            Email: Bases.Email,
            Senha: Bases.Senha,
        })
        navigate("/"); // Navegue para a rota raiz aqui
    }

    return ( 
        <div id="container">
            <div id="container-form1">
                <div id="titulo-div-input">
                    <h1>Login</h1>
                </div>
                <div id="nome-div-input">
                <label>Nome:</label>
                    <input type="text" placeholder="Digite um nome" onChange={HandleNome}></input>
                </div>
                <div id="email-div-input">
                <label>Email:</label>
                    <input type="text" placeholder="Digite um email" onChange={HandleEmail}></input>
                </div>
                <div id="senha-div-input">
                <label>Senha:</label>
                    <input id="lastinput" type="text" placeholder="Digite uma senha" onChange={HandleSenha}></input>
                </div>
                <button id="botao" onClick={handleRegisterDados}>Enviar</button>
            </div>
        </div>
     );
}

export default CreateACC;
