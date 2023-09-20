import './form.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [data, setData] = useState([]);
  const [mensagemCerto, setMensagemCerto] = useState('');
  const [mensagemErrado, setMensagemErrado] = useState('');

  const HandleSaveEmail = (e) => {
    setEmail(e.target.value);
  }

  const HandleSaveSenha = (e) => {
    setSenha(e.target.value);
  }

  useEffect(() => {
    axios.get('http://localhost:5000/dados')
      .then(response => {
        setData(response.data);
      })
  },[])

  const HandleLoginDados = () => {
    const user = data.find(user => user.email === email && user.senha === senha);
    if(user) {
      setMensagemCerto('Login bem-sucedido!');
      setMensagemErrado('');
    } else {
      setMensagemErrado('E-mail ou senha inválidos!');
      setMensagemCerto('');
    }
  }

  return (
    <div id="container">
      <div id="container-form">
        <div id="titulo-div-input">
          <h1>Login</h1>
        </div>
        <div id="email-div-input">
          <label>Email:</label>
          <input type="text" placeholder="Digite um email" onChange={HandleSaveEmail}></input>
          <p id="emailverificated" style={{color: 'red'}}>{mensagemErrado}</p>
        </div>
        <div id="senha-div-input">
          <label>Senha:</label>
          <input type="text" placeholder="Digite uma senha" onChange={HandleSaveSenha}></input>
          <p id="senhaverificated" style={{color: 'red'}}>{mensagemErrado}</p>
        </div>
        <div id="criarconta-div-input">
          <a href='/createacount'>Criar conta</a>
        </div>
        <div id="botao-div">
        <button id="botao" onClick={HandleLoginDados}>Enviar</button>
        </div>
        <div id="mensagem-certo">
        <p style={{color: 'green'}}>{mensagemCerto}</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
