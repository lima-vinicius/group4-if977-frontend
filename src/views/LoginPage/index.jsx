import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';

// import { useInfo } from '../../context/UserContext';

export const Login = () => {
    // const [redirect, setRedirect] = useState(false);
    // const [, setUserInfo] = useInfo()[0];

    const [login, setLogin] = useState({
        email: '',
        password: '',
      });

    const handleLogin = async () => {
        alert ('Login')
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
        <>
            <h2>Página Login</h2>

            <input
                type="text"
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                placeholder="Digite seu e-mail"
            />
            <input
                type="password"
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                placeholder="Digite sua senha"
            />
            <button onClick={handleLogin}>Logar</button>
        </>
    );
}

export default Login