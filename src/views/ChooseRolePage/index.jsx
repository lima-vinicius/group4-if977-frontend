import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";

import './styles.css'
import { LayoutComponents } from "../../components/LayoutComponents/index.jsx"
import logo from "../../assets/olimpo-logo.png"

const ChooseRole = () => {

  return (
    <LayoutComponents >
        <span className="base-form-logo">
          <img src={logo} alt="Logo da Olimpo" />
        </span>

        <span className="base-form-title"> Sou? </span>

        <div className='container-btn-choose'>
          <div className="container-base-form-btn">
            <Link to="/college-register" className="chooserole-form-btn">Universidade</Link>
          </div>

          <div className="container-base-form-btn">
            <Link to="/student-register" className="chooserole-form-btn">Estudante</Link>
          </div>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/">
            Faça Login
          </Link>
        </div>
    </LayoutComponents>
  )
}

export default ChooseRole