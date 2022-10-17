import React from 'react';
import CardInformation from '../../components/CardInformation';
import CardWarning from '../../components/CardWarning';
import './styles.css'

const CollegeDashboard = () => {
    return (
        <div className='main-cards-dashboard'>
            <div className='header-dashboard'>
                <CardWarning></CardWarning>
                <CardInformation></CardInformation>
            </div>
            <div className='main-list'>
                <div className='activies-card activies-card-title'>
                    <p>Cadeira</p>
                    <p>Atividade</p>
                    <p>Entrega</p>
                </div>
                <div className='activies-card'>
                    <p>Algoritmos</p>
                    <p>Lista 4</p>
                    <p>28/10/2022</p>
                </div>
                <div className='activies-card'>
                    <p>Lógica</p>
                    <p>Lista 3</p>
                    <p>28/10/2022</p>
                </div>
                <div className='activies-card'>
                    <p>Programação</p>
                    <p>Lista 7</p>
                    <p>28/10/2022</p>
                </div>
                <div className='activies-card'>
                    <p>Eng. Software</p>
                    <p>Strateegia</p>
                    <p>28/10/2022</p>
                </div>
                <div className='activies-card'>
                    <p>Inglês</p>
                    <p>Lista 1</p>
                    <p>28/10/2022</p>
                </div>
                <div className='activies-card'>
                    <p>Introdução SI</p>
                    <p>Lista 2</p>
                    <p>28/10/2022</p>
                </div>
                <div className='activies-card'>
                    <p>Redes</p>
                    <p>Lista 3</p>
                    <p>28/10/2022</p>
                </div>
                <div className='activies-card'>
                    <p>Gestão</p>
                    <p>Lista 9</p>
                    <p>28/10/2022</p>
                </div>
            </div>
        </div>
    );
};

export default CollegeDashboard;