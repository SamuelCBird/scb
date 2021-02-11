import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Header.css';
import music_svg from '../images/music.svg';
import photo_svg from '../images/photo.svg';
import prog_svg from '../images/prog.svg';

export const Header = () => {

    const hoverVariants = {
        hover: {
            scale: 0.95,
            transition: {
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.2
            }
        }
    }

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
                <motion.h1 variants={hoverVariants} whileHover='hover'>
                    <NavLink className='link' exact to='/'>{ dimensions.width < 960 ? 'scb' : 'samuelcbird' }</NavLink>
                </motion.h1>
                <ul id="navList">
                    <NavLink className='link' activeClassName='activeLink' to='/music'>
                        <motion.li
                            variants={hoverVariants}
                            whileHover='hover'
                        ><div className="listItem" style={{backgroundImage: `url(${music_svg})`}}></div><div>{ dimensions.width < 960 ? null : 'music'}</div></motion.li>
                    </NavLink>
                    <NavLink className='link' activeClassName='activeLink' to='/photography'>
                        <motion.li
                            variants={hoverVariants}
                            whileHover='hover'
                        ><div className='listItem' style={{backgroundImage: `url(${photo_svg})`}}></div><div>{ dimensions.width < 960 ? null : 'photography'}</div></motion.li>
                    </NavLink>
                    <NavLink className='link' activeClassName='activeLink' to='/programming'>
                        <motion.li
                            variants={hoverVariants}
                            whileHover='hover'
                        ><div className='listItem' style={{backgroundImage: `url(${prog_svg})`}}></div><div>{ dimensions.width < 960 ? null : 'programming'}</div></motion.li>
                    </NavLink>
                </ul>
            </div>
            <ul id='navList2'>
                <NavLink className='link' activeClassName='activeLink' to='/about'>
                    <motion.li
                        variants={hoverVariants}
                        whileHover='hover'
                    >about</motion.li>
                </NavLink>
                <NavLink className='link' activeClassName='activeLink' to='/curriculumvitae'>
                    <motion.li
                        variants={hoverVariants}
                        whileHover='hover'
                    >cv</motion.li>
                </NavLink>
            </ul>
        </div>
    )
}