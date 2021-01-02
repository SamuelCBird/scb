import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { DataObjects } from './DataObjects';
import { ImageView } from './ImageView';
import closeButton from './closeButton.svg';

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
    return (
        <div style={lightboxContainer}>
            <div style={close} onClick={() => { history.goBack() } }></div>
            <div style={blackout} onClick={() => { history.goBack() } }></div>
            <div id="lightboxContent" style={lightboxContent}>
                <ImageView imgs={images} />
                <h2>{title}</h2>
                <p>{descrip}</p>
            </div>
        </div>
    )
    }