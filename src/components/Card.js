import React from 'react';
import { cats, cardSize } from './DataEnums'
import { motion } from 'framer-motion';
import '../styles/Card.css'

export const Card = (props) => {

    const animateVariants = {
        hover: {
            scale: 1.05,
            y: -4,
            rotateZ: [0, 1, 0, 1, 0],
            transition: {
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.3
            }
        }
    }
    
    let cardStyle = {
        width: '160px',
        backgroundImage: '',
    }
    let line = {
        position: 'absolute',
        bottom: '0',
        height: '4px',
        width: '100%',
        backgroundColor: '',
    }

    if ( props.data ) {
        // populate bg image
        const image = props.data.bgImage.img1;
        cardStyle.backgroundImage = `url(${image})`;

        // colour line
        if ( props.data.cat === cats.music ) {
            line.backgroundColor = '#A9DCAE';
        } else if ( props.data.cat === cats.photo ) {
            line.backgroundColor = '#FEAD73';
        } else {
            line.backgroundColor = '#C893F1';
        }

        // rect or square
        if ( props.data.size === cardSize.square ) {
            cardStyle.width = '160px';
        } else {
            cardStyle.width = '200px';
        }
    }

    return (
            <motion.div id='card' style={ cardStyle } 
                variants={animateVariants}
                whileHover='hover'
            >
                <motion.div id='forhover'
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.25 }}
                    transition={{ type: 'tween', ease: 'easeInOut', duration: 0.15 }}
                ></motion.div>
                <div style={ line }></div>
            </motion.div>
    )
}