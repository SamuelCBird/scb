import React from 'react';

export const ImageView = (props) => {

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

    if (props.imgs) {
        // populate image
        const image = props.imgs.img1;
        imageDisplay.backgroundImage = `url(${image})`;
    }

    return (
        <div style={{width: '100%', display: 'inline-flex', justifyContent: 'space-evenly'}}>
            <div style={imageDisplay}></div>


            {/* 
            
            Can delete once there is a branch to develop this

            <div style={{flexDirection: 'column'}}>

            </div> */}
        </div>
    )
}