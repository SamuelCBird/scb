import React, { useState, useEffect } from 'react';
import { ImagePreview } from './ImagePreview';
import defaultImage from '../images/defaultImage.jpg';

export const ImageView = (props) => {
    const [images, setImages] = useState();
    let [previews, setPreviews] = useState();


    // CANNOT FIGURE THIS OUT
    useEffect(() => {
        setImages(props.imgs);

        Object.keys(images).forEach(key => {
            setPreviews({
                ...previews,
                [key]: images[key]
            })
        })
    }, [images, props.imgs])

    let imageDisplay = {
        backgroundImage: `url()`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        top: '10px',
        left: '10px',
        height: '400px',
        width: '600px'
    }

    return (
        <div style={{width: '100%', display: 'inline-flex', justifyContent: 'space-evenly'}}>
            <div style={imageDisplay}></div>
            <div style={{flexDirection: 'column'}}>

            </div>
        </div>
    )
}