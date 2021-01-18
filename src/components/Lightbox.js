import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { DataObjects } from './DataObjects';
import { ImageView } from './ImageView';
import closeButton from './closeButton.svg';
import '../styles/Lightbox.css';

export const Lightbox = (props) => {
    const history = useHistory();
    const itemID = props.match.params.id;
    const [title, setTitle] = useState();
    const [descrip, setDescrip] = useState();
    const [images, setImages] = useState();

    useEffect(() => {
        DataObjects.forEach(item => {
            if (item.id.toString() === itemID) {
                setTitle(item.title);
                setDescrip(item.descrip);
                setImages(item.bgImage);
            }
        })
    }, [itemID])

    const close = {
        position: 'fixed',
        zIndex: '100',
        backgroundImage: `url(${closeButton})`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        width: '40px',
        height: '40px',
        top: '120px',
        right: '30px',
        cursor: 'pointer'
    }

    const exitLightbox = () => {
        // trying to figure out closing lightbox properly. Not much luck so far. 
        console.log('yoyoyo')
        console.log(props.prevLocation)
    }

    return (
        <div id='lightbox-container'>
            <div style={close} onClick={() => { exitLightbox() } }></div>
            <div id='blackout' onClick={() => { history.goBack() } }></div>
            <div id="lightbox-content">
                <ImageView imgs={images} style={{flexGrow: 2}}/>
                <div style={{padding: '10px 0 0 0'}}>
                    <h2>{title}</h2>
                    <p>{descrip}</p>
                </div>
            </div>
        </div>
    )
    }