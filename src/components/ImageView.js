import React from 'react';
import '../styles/ImageView.css';

export const ImageView = (props) => {

    let imageDisplay = {
        backgroundImage: `url()`
    }

    if (props.imgs) {
        // populate image
        const image = props.imgs.img1;
        imageDisplay.backgroundImage = `url(${image})`;
    }

    return (
            <div style={imageDisplay} id="imageViewImage"></div>
    )
}