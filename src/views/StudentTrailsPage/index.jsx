import React from 'react';
import './styles.css'

import ExpandedCard from '../../components/Card';

const StudentTrails = () => {

    const popUpCard = (state)  => {
        const popupCardExtended = document.getElementById('main-expanded-card')
        const backgroundChange = document.getElementById('main-student-trails')
        popupCardExtended.style.display = state
    }

    return (
        <div id='main-student-trails'>
            <div id='main-expanded-card'>
                <ExpandedCard popUpFunction={popUpCard} />
            </div>
            <h1 className='trails-title'>Escolha seu tópico de estudo</h1>
            <div className='header-student-trails'>
                <div className='trails-card'>
                    <p className='title-trail-card' onClick={() => popUpCard('block')}>Design Sprint</p>
                </div>
            </div>
        </div>
    );
};

export default StudentTrails;