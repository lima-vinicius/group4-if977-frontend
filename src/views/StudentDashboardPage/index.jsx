import React from 'react';
import CardInformation from '../../components/CardInformation';
import CardWarning from '../../components/CardWarning';
import './styles.css'

const CollegeDashboard = () => {

    const dataActivities = [{
        subject: 'Algoritmos',
        activity: 'Lista 4',
        date: '18/10/2022',
    },
    {
        subject: 'Lógica',
        activity: 'Lista 7',
        date: '20/10/2022',
    },
    {
        subject: 'Inglês',
        activity: 'Atividade 2',
        date: '22/10/2022',
    },
    {
        subject: 'Adminstração',
        activity: 'Estudo de caso',
        date: '24/10/2022',
    }
    ]
    return (
        <div className='main-cards-dashboard'>
            <div className='header-dashboard'>
                <CardInformation />
                <CardWarning />
            </div>
            <div className='main-list'>
                <div className='activities-card activities-card-title'>
                    <p><strong>Disciplina</strong></p>
                    <p><strong>Atividade</strong></p>
                    <p><strong>Data final</strong></p>
                </div>
                {
                    dataActivities.map((item, index)=>(
                        <div key={index} className='activities-card'>
                            <p>{item.subject}</p>
                            <p>{item.activity}</p>
                            <p>{item.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CollegeDashboard;