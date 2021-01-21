import React from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile, isMobileOnly } from 'react-device-detect';
import '../styles/Header.css';
import music_svg from '../images/Music.svg';
import photo_svg from '../images/Photography.svg';
import prog_svg from '../images/Programming.svg';

export const Header = () => {
    return (
        <div id='header'>
            <div id='titleMainNav'>
                <h1>
                    <NavLink className='link' exact to='/'>{ isMobileOnly ? 'scb' : 'samuelcbird' }</NavLink>
                </h1>
                <ul id="navList">
                    <NavLink className='link' activeClassName='activeLink' to='/music'>
                        <li><div className="listItem" style={{backgroundImage: `url(${music_svg})`}}></div>{ isMobile ? null : 'music'}</li>
                    </NavLink>
                    <NavLink className='link' activeClassName='activeLink' to='/photography'>
                        <li><div className='listItem' style={{backgroundImage: `url(${photo_svg})`}}></div>{ isMobile ? null : 'photography'}</li>
                    </NavLink>
                    <NavLink className='link' activeClassName='activeLink' to='/programming'>
                        <li><div className='listItem' style={{backgroundImage: `url(${prog_svg})`}}></div>{ isMobile ? null : 'propgramming'}</li>
                    </NavLink>
                </ul>
            </div>
            <ul id='navList2'>
                <NavLink className='link' activeClassName='activeLink' to='/about'><li>about</li></NavLink>
                <NavLink className='link' activeClassName='activeLink' to='/curriculumvitae'><li>cv</li></NavLink>
            </ul>
        </div>
    )
}