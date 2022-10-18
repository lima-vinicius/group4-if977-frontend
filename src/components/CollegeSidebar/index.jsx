import React, { useState } from 'react';
import iconLogo from '../../assets/olimpo-logo.png'
import { NavLink } from 'react-router-dom';

import './styles.css'

const CollegeSidebar = ({children}) => {
    const menuItem = [
        {
            path:"/college-dashboard",
            name:"Início",
        },
        {
            path:"/college-warnings",
            name:"Avisos",
        }, 
        {
            path:"/college-trails",
            name:"Trilhas da Universidade",
        },
        {
            path:"/college-profile",
            name:"Perfil",
        },
        {
            path:"/logout",
            name:"Sair",
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
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default CollegeSidebar;