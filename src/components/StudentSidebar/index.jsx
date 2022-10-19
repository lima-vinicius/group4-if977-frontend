import React, { useState } from 'react';
import iconLogo from '../../assets/olimpo-logo-white.png'
import { NavLink, Link } from 'react-router-dom';

import home from '../../assets/home-icon.png';
import trail from '../../assets/trail-icon.png';
import profile from '../../assets/profile-icon.png'
import college from '../../assets/college-icon.png'
import logout from '../../assets/logout-icon.png'

import './styles.css'

const StudentSidebar = ({children}) => {
    const menuItem = [
        {
            path:"/student-dashboard",
            name:"Início",
            icon: home
        },
        {
            path:"/student-trails",
            name:"Trilhas Pessoais",
            icon: trail
        }, 
        {
            path:"/student-college-trails",
            name:"Trilhas da Universidade",
            icon: college
        },
        {
            path:"/student-profile",
            name:"Perfil",
            icon: profile
        }
    ]
    return (
        <div className="sidebar-container">
            <div  className="sidebar">
                <div className="top_section">
                    <img  src={iconLogo} alt="Logo da Olimpo" className="sidebar-logo" />
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <img src={item.icon} alt="icon" className="sidebar-icon" />
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <Link className="logout link" activeclassName="active" to="/">
                    <img src={logout} alt="icon" className="sidebar-icon" />
                    <div className="link_text">Sair</div>
                </Link>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default StudentSidebar;