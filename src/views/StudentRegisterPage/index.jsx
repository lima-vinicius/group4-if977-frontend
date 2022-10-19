import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";

import { LayoutComponents } from "../../components/LayoutComponents/index.jsx"
import logo from "../../assets/olimpo-logo.png"

const StudentRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  const handleStudentRegister = async () => {
    alert ('Student Register')
    // const makeStudentRegister = await [Realizar a requisição para a rota de criação de um perfil para estudante e colocar o objeto do cadastro no body] ;
    // setUserInfo(makeStudentRegister.data.data.user);
    // Após o final do cadastro, já realizar o login do estudante
    // const { token } = await makeStudentRegister.data.data;
    // const { id, permission } = await makeStudentRegister.data.data.user;
    // localStorage.setItem('olimpo-token', token);
    // localStorage.setItem('olimpo-id', id);
    //  setRedirect({
    //    pathname: '/student-dashboard',
    //  });
}

  return (
    <LayoutComponents >
      <form className="base-form">

        <span className="base-form-logo">
          <img src={logo} alt="Logo da Olimpo" />
        </span>

        <span className="base-form-title"> Cadastro do Estudante </span>

      <div className="wrap-input">
        <input
          className={name !== "" ? "has-val input" : "input"}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Nome"></span>
      </div>

      <div className="wrap-input">
        <input
          className={email !== "" ? "has-val input" : "input"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Email"></span>
      </div>

      <div className="wrap-input">
        <input
          className={password !== "" ? "has-val input" : "input"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Senha"></span>
      </div>

        <div className="container-base-form-btn">
          <button className="base-form-btn" onClick={handleStudentRegister}>Cadastre-se</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/">
            Faça Login
          </Link>
        </div>

      </form>
    </LayoutComponents>
  )
}

export default StudentRegister