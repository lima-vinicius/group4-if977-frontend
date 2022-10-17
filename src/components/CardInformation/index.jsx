import React from 'react';

import logoUfpe from '../../assets/ufpe-logo.png'

const CardInformation = () => {
    return (
        <div className='dashboard-card'>
            <div className='container-logo-card-warning'>
                <img src={logoUfpe} alt="logo" />
            </div>
            <div className='container-information-warning'>
                <h1>UFPE Informa</h1>
                <p>No dia 28 de Outubro, encerraremos nossas atividades do nosso período letivo</p>
            </div>
            
        </div>
    );
};

export default CardInformation;