import React, { useEffect, useState } from 'react';
import { useLastLocation } from 'react-router-last-location';
import { useHistory } from 'react-router-dom'
import { DataObjects } from './DataObjects';
import { ImageView } from './ImageView';
import '../styles/Lightbox.css';

// THINK ABOUT ANIMATION

export const Lightbox = (props) => {
    const history = useHistory();
    const lastLocation = useState(useLastLocation());
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

    const exitLightbox = () => {
        if (lastLocation[0] !== null) {
            history.goBack();
        } else {
            history.push('/');
        }
    }

    return (
        <div id='lightbox-container'>
            <div id='blackout' onClick={() => { exitLightbox() } }></div>
            <div id="lightbox-content">
                <ImageView imgs={images}/>
                <div style={{padding: '10px 0 0 0'}}>
                    <h2>{title}</h2>
                    <p>{descrip}</p>
                </div>
            </div>
        </div>
    )
    }