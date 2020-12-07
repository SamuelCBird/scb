import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div id='header'>
            <div id='titleMainNav'>
            <h1>
                <NavLink className='link' exact to='/'>samuelcbird</NavLink>
            </h1>
                <ul id="navList">
                    <NavLink className='link' activeClassName='activeLink'to='/music'><li id="musicListItem">music</li></NavLink>
                    <NavLink className='link' activeClassName='activeLink' to='/photography'><li id="photogListItem">photography</li></NavLink>
                    <NavLink className='link' activeClassName='activeLink' to='/programming'><li id="progListItem">programming</li></NavLink>
                </ul>
            </div>
                <ul id='navList2'>
                    <li>about</li>
                    <li>cv</li>
                </ul>
        </div>
    )
}