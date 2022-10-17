import React from 'react';
import './styles.css'

import profile from '../../assets/profile-image.png'

const StudentProfile = () => {
    return (
        <div className='main-cards-dashboard'>
            <div className='informations-profile'>
                <div className='profile-image'>
                    <img src={profile} alt="profile=-image"/>
                    <button className='profile-btn'>Alterar foto</button>
                </div>
                <div className='profile-all-informations'>

                <h1 className='title-profile'>Informações do Estudante</h1>
                <div className="wrap-input-profile">
                    <input          
                    className="input-profile"
                    type="text"
                    value='Vinicius Lima'
                    />
                </div>
                <div className="wrap-input-profile">
                    <input          
                    className="input-profile"
                    type="text"
                    value='viniciusraflima@ufpe.br'
                    />
                </div>
                <div className="wrap-input-profile">
                    <input          
                    className="input-profile"
                    type="text"
                    value='+55 (81) 9 9429-9649'
                    />
                </div>
                <div className="wrap-input-profile">
                    <input          
                    className="input-profile"
                    type="text"
                    value='Universidade Federal de Pernambuco'
                    />
                </div>
                <div className="wrap-input-profile">
                    <input          
                    className="input-profile"
                    type="text"
                    value='Sistemas de Informação'
                    />
                </div>

                <button className='profile-btn salve-information'>Salvar Informações</button>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;