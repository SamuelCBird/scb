import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Card.css'
import { storage } from './FirestoreSecret';

export const Card = (props) => {
    const [imageURL, setImageURL] = useState();
    const [cardSize, setCardSize] = useState(160);
    const [lineColour, setLineColour] = useState();

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
        width: `${cardSize}px`,
        backgroundImage: `url(${imageURL})`,
    }
    let line = {
        position: 'absolute',
        bottom: '0',
        height: '4px',
        width: '100%',
        backgroundColor: `${lineColour}`,
    }
    
    useEffect(() => {
        // card size
        if ( props.data.size === 'square' ) {
            setCardSize(160)
        } else {
            setCardSize(200);
        }

        // colour line
        if ( props.data.category === 'music' ) {
            setLineColour('#A9DCAE');
        } else if ( props.data.category === 'photography' ) {
            setLineColour('#FEAD73');
        } else {
            setLineColour('#C893F1');
        }
    }, [props.data.size, props.data.category])

    useEffect(() => {
        storage.ref(props.data.image).getDownloadURL().then(url => {
            setImageURL(url);
        })
    }, [props.data.image])

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