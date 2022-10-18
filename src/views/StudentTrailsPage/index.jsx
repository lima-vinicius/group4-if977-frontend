import React from 'react';
import './styles.css'

import ExpandedCard from '../../components/Card';

const StudentTrails = () => {

    const popUpCard = ()  => {
        const popupCardExtended = document.getElementById('main-expanded-card')
        popupCardExtended.style.display = 'block'
    }

    return (
        <div className='main-student-trails'>
        <div id='main-expanded-card'>
            <ExpandedCard />
        </div>
            <div className='header-student-trails'>
                <div className='trails-card'>
                    <p className='title-trail-card' onClick={popUpCard}>Design Sprint</p>
                </div>
            </div>
        </div>
    );
};

export default StudentTrails;