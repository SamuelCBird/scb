import React, { useEffect, useState } from 'react';
import { DataObjects } from './DataObjects';

export const Lightbox = (props) => {
    const itemID = props.match.params.id;
    // let [currentItem, setItem] = useState(null);
    let currentItem = null;

    DataObjects.map(item => {
        if (item.id === itemID) {
            console.log('matched')
            currentItem = item
        }
    })

    const lb_container = {
        display: 'flex',
        height: '100%',
        width: '100%',
        margin: '0',
        padding: '0',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const blackout = {
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        zIndex: '50',
        backgroundColor: '#000',
        opacity: '0.5'
    }
    const lb_content = {
        // position: 'absolute',
        backgroundColor: '#E7E7E7',
        width: '900px',
        height: '800px',
        zIndex: '100',
        padding: '20px'
    }

    return (
        <div style={lb_container}>
            <div style={blackout}></div>
            <div style={lb_content}>
                <h1>{currentItem.title}</h1>
                {currentItem.descrip}
            </div>
        </div>
    )
    }