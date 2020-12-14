import React, { useState, useEffect } from 'react';
import { ImagePreview } from './ImagePreview';
import defaultImage from '../images/defaultImage.jpg';

export const ImageView = (props) => {
    let [images, setImages] = useState();
    let [display, setDisplay] = useState(defaultImage);

    useEffect(() => {
        let initalImages = [];
        if (props.imgs !== undefined) {
            for (let [key, value] of Object.entries(props.imgs)) {
                initalImages.push([key, value])
            }
            setImages(initalImages);
        }
    }, [props.imgs]);

    let imageDisplay = {
        backgroundImage: `url(${display})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        top: '10px',
        left: '10px',
        height: '400px',
        width: '600px'
    }

    function imageSelection(selectedImage) {
        setDisplay(selectedImage);
    }

    return (
        <div style={{width: '100%', display: 'inline-flex', justifyContent: 'space-evenly'}}>
            <div style={imageDisplay}></div>
            <div style={{flexDirection: 'column'}}>
                {   
                    images !== undefined ? 
                    images.map(item => {
                        // src = the image, objKey = a name to set it as selected in ImagePreview, forSelection = callback function to select from the different images key = for React to make sure the right thing is returned in .map function
                        return <ImagePreview src={item[1]} objKey={item[0]} forSelection={imageSelection} key={item[0]} /> 
                    }) :
                    null
                }
            </div>
        </div>
    )
}