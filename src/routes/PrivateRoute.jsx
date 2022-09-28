import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useInfo } from '../context/UserContext'
import { checkToken } from '../global';

function PrivateRoute({
    path,
    exact,
    component: Comp,
    location,
    permissionRoute,
    ...props
}) {
    const [logged, setLogged] = useState(null);

    const [userinfo] = useInfo()[0];

    const checkLogged = async () => {
        try {
          const isLogged = await checkToken();
          setLogged(isLogged);
        } catch (err) {
          setLogged(false);
        }
      };

      useEffect(() => {
        checkLogged();
      }, []);

    //   if (!logged) return <Login />; 
    // Se usuário não estiver logado, redireciona para a tela de login
    //   if (permissionRoute && permissionRoute.length !== 0 && !(permissionRoute.includes(userinfo?.permission))) return <Redirect to="/" />
    //  Se usuário estiver logado e tentar acessa uma rota que não é permitida, ele é redirecionado para a tela inicial

      return (
        <Route {...props}>
          <Comp />
        </Route>
      );
}

export default PrivateRoute
