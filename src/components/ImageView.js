import React from 'react';

export const ImageView = (props) => {

    let imageDisplay = {
        flexGrow: '2',
        backgroundImage: `url()`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        top: '10px',
        left: '10px',
        minHeight: '400px',
        minWidth: '400px'
    }

    if (props.imgs) {
        // populate image
        const image = props.imgs.img1;
        imageDisplay.backgroundImage = `url(${image})`;
    }

    return (
            <div style={imageDisplay}></div>
    )
}