import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import { LayoutComponents } from "../../components/LayoutComponents/index.jsx"
import logo from "../../assets/olimpo-logo.png"
// import { useInfo } from '../../context/UserContext';

const Login = () => {
    const [redirect, setRedirect] = useState(false);
    // const [, setUserInfo] = useInfo()[0];

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

    const handleLogin = async () => {
        window.location.href = '/student-dashboard'
        // const makeLogin = await [Realizar a requisição para a a rota de login e colocar o objeto de login no body] ;
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
        <LayoutComponents>
            <form className="base-form">

                <span className="base-form-logo">
                    <img src={logo} alt="Logo da Olimpo" />
                </span>

                <span className="base-form-title"> Faça Login </span>

                <div className="wrap-input">
                    <input          
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Digite seu E-mail"></span>
                </div>

                <div className="wrap-input">
                    <input
                    className={password !== "" ? "has-val input" : "input"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Digite sua senha"></span>
                </div>

                <div className="container-base-form-btn">
                    <Link className="base-form-btn" to="/student-dashboard">Entrar</Link>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta? </span>
                    <Link className="txt2" to="/choose-role">
                        Criar conta.
                    </Link>
                </div>  

            </form>
        </LayoutComponents>
    )
}

export default Login