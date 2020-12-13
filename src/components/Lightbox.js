import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { DataObjects } from './DataObjects';
import { ImagePreview } from './ImagePreview';
import closeButton from './closeButton.svg'

export const Lightbox = (props) => {
    const history = useHistory();
    const itemID = props.match.params.id;
    let [title, setTitle] = useState();
    let [descrip, setDescrip] = useState();
    let [image, setImage] = useState();
    
    useEffect(() => {
        DataObjects.forEach(item => {
            if (item.id.toString() === itemID) {
                setTitle(item.title);
                setDescrip(item.descrip);
                setImage(item.bgImage);
            }
        })
    }, [])

    const close = {
        position: 'fixed',
        zIndex: '100',
        backgroundImage: `url(${closeButton})`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        width: '40px',
        height: '40px',
        top: '30px',
        right: '30px',
        cursor: 'pointer'
    }
    const lightboxContainer = {
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
    const lightboxContent = {
        backgroundColor: '#E7E7E7',
        width: '900px',
        height: '600px',
        zIndex: '100',
        padding: '20px',
        overflow: 'scroll'
    }
    const imageDisplay = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        top: '10px',
        left: '10px',
        height: '400px',
        width: '600px'
    }
    return (
        <div style={lightboxContainer}>
            <div style={close} onClick={() => { history.goBack() } }></div>
            <div style={blackout} onClick={() => { history.goBack() } }></div>
            <div id="lightboxContent" style={lightboxContent}>
                <div style={{width: '100%', display: 'inline-flex', justifyContent: 'space-evenly'}}>
                    <div style={imageDisplay}></div>
                    <div style={{flexDirection: 'column'}}>
                        <ImagePreview /><ImagePreview /><ImagePreview /><ImagePreview />
                    </div>
                </div>
                <h2>{title}</h2>
                <p>{descrip}</p>
            </div>
        </div>
    )
    }