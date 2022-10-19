import React from 'react';
import './styles.css'

import logoEngenharia from '../../assets/engenharia-logo.png'

const CardWarning = () => {
    return (
        <div className='dashboard-card'>
            <div className='container-logo-card-warning'>
                <img src={logoEngenharia} alt="logo" />
            </div>
            <div className='container-information-warning'>
                <h1>Proxíma Avaliação</h1>
                <h2>Engenharia de Software</h2>
                <div className='container-date-objective'>
                    <p><strong>Data: </strong>17/10/2022</p>
                    <p><strong>Objetivo: </strong>Entrega final do projeto idealizado pelos alunos</p>
                </div>

            </div>
            
        </div>
    );
};

export default CardWarning;