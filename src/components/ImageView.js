import React from 'react';
import { ImagePreview } from './ImagePreview';

export const ImageView = (props) => {
    const imageDisplay = {
        backgroundImage: `url(${props.images})`,
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
                <ImagePreview /><ImagePreview /><ImagePreview /><ImagePreview />
            </div>
        </div>
    )
}