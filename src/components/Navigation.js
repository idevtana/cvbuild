import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profil from '../medias/profil.jpg'

const Navigation = () => {
    return (
        <>
            <div className="profil header">
                <div className="photo">
                    <img src={Profil} alt="profil" />
                </div>
                <div className="social-network">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={['fas', 'phone']} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={['fab', 'skype']} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-menu">
                <ul>
                    <li>
                        <NavLink to="/mycv" className={ ({isActive}) => isActive ? 'navactive':null } end>
                            <FontAwesomeIcon icon={['fas', 'house']} />
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/a-propos" className={ ({isActive}) => isActive ? 'navactive':null }>
                            <FontAwesomeIcon icon={['far', 'user']} />
                            <span>A propos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience" className={ ({isActive}) => isActive ? 'navactive':null }>
                            <FontAwesomeIcon icon={['far', 'file']} />
                            <span>Experiences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={ ({isActive}) => isActive ? 'navactive':null }>
                            <FontAwesomeIcon icon={['fas', 'grip']} />
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={ ({isActive}) => isActive ? 'navactive':null }>
                            <FontAwesomeIcon icon={['far', 'envelope']} />
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="footer">
                <span className='copyright'>
                    © Copyright 2022
                </span>
                <span className='credits'>
                    Designed by Gino Lee
                </span>
            </div>
       </>
    );
};

export default Navigation;