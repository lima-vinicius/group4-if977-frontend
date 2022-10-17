import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";

import { LayoutComponents } from "../../components/LayoutComponents/index.jsx"
import logo from "../../assets/olimpo-logo.png"

const CollegeRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  const handleCollegeRegister = async () => {
    alert ('College Register')
    // const makeLogin = await [Realizar a requisição para a rota de criação de um perfil para universidade e colocar o objeto do cadastro no body] ;
    // setUserInfo(makeLogin.data.data.user);
    // const { token } = await makeLogin.data.data;
    // const { id, permission } = await makeLogin.data.data.user;
    // localStorage.setItem('olimpo-token', token);
    // localStorage.setItem('olimpo-id', id);

    // if (permission === 1) {
    //     setRedirect({
    //       pathname: '/college',
    //     });
    //   } else if (permission === 2) {
    //     setRedirect({
    //       pathname: '/student',
    //     });
    // }
}

  return (
    <LayoutComponents >
      <form className="base-form">

        <span className="base-form-logo">
          <img src={logo} alt="Logo da Olimpo" />
        </span>

        <span className="base-form-title"> Cadastro da Universidade </span>

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
          <button className="base-form-btn" onClick={handleCollegeRegister}>Cadastre-se</button>
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

export default CollegeRegister