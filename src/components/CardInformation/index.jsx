import React from 'react';

import logoUfpe from '../../assets/ufpe-logo.png'

const CardInformation = () => {

    const dataCollegeInformation = {
        college: 'UFPE Informa',
        title: 'Aviso Prorrogação das Inscrições',
        information: 'Após ponderações acerca da quantidade de inscrições, disponibilidade de vagas, demanda pelo programa e viabilidade no processo seletivo para o ano de 2021, a Coordenação do MPA e a Comissão de Seleção decidiu por prorrogar o período de inscrições para até o dia 06/09/2021.'
    }
    return (
        <div className='dashboard-card'>
            <div className='container-logo-card-warning'>
                <img src={logoUfpe} alt="logo" />
            </div>
            <div className='container-information-warning'>
                <h1>{dataCollegeInformation.college}</h1>
                <h2>{dataCollegeInformation.title}</h2>
                <p>{dataCollegeInformation.information}</p>
            </div>
            
        </div>
    );
};

export default CardInformation;