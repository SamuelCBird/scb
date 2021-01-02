import React, { useState, useEffect } from 'react';
import { ImagePreview } from './ImagePreview';
import defaultImage from '../images/defaultImage.jpg';

export const ImageView = (props) => {
    const [images, setImages] = useState();

    // images come in as object - img1: image
    // here we need to hold info: name: string, image: string, selected: bool,

    //  look for another way...

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
                {images.map(image => {
                    return <ImagePreview name={image['name']} image={image['image']} selected={image['selected']} />
                })}
            </div>
        </div>
    )
}