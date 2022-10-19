import React from 'react';

const CollegeTrails = () => {

    const collegeTrailsData = [
        {
            subject: 'Design'
        },
        {
            subject: 'Administração'
        },        
        {
            subject: 'Programação 1'
        },
        {
            subject: 'Programação 2'
        },
        {
            subject: 'Inglês'
        },
        {
            subject: 'Redes'
        },
        {
            subject: 'Lógica'
        },
        {
            subject: 'TCC'
        },
        {
            subject: 'Algoritmos'
        },
    ]
    return (
        <div className='main-student-trails'>
            <div className='header-student-trails'>
                {
                    collegeTrailsData.map((item, index)=>(
                        <div key={index} className='trails-card'>
                            <p className='title-trail-card'>{item.subject}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CollegeTrails;