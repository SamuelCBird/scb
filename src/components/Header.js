import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import music_svg from '../images/music.svg';
import photo_svg from '../images/photo.svg';
import prog_svg from '../images/prog.svg';

export const Header = () => {

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight, 
        width: window.innerWidth
    })

    function debounce(fn, ms) {
        let timer
        return _ => {
            clearTimeout(timer)
            timer = setTimeout(_ => {
                timer = null
                fn.apply(this, arguments)
            }, ms)
        }
    }

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize () {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 500)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    return (
        <div id='header'>
            <div id='titleMainNav'>
                <h1>
                    <NavLink className='link' exact to='/'>{ dimensions.width < 960 ? 'scb' : 'samuelcbird' }</NavLink>
                </h1>
                <ul id="navList">
                    <NavLink className='link' activeClassName='activeLink' to='/music'>
                        <li><div className="listItem" style={{backgroundImage: `url(${music_svg})`}}></div><div>{ dimensions.width < 960 ? null : 'music'}</div></li>
                    </NavLink>
                    <NavLink className='link' activeClassName='activeLink' to='/photography'>
                        <li><div className='listItem' style={{backgroundImage: `url(${photo_svg})`}}></div><div>{ dimensions.width < 960 ? null : 'photography'}</div></li>
                    </NavLink>
                    <NavLink className='link' activeClassName='activeLink' to='/programming'>
                        <li><div className='listItem' style={{backgroundImage: `url(${prog_svg})`}}></div><div>{ dimensions.width < 960 ? null : 'programming'}</div></li>
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