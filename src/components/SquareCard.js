import React from 'react';
import { cats } from './DataEnums'

export const SquareCard = (props) => {
    const cardStyle = {
        position: 'relative',
        margin: '20px 20px 0 0',
        border: '5px solid #fff',
        width: '160px',
        height: '160px',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        backgroundImage: '',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top'
    }
    const line = {
        position: 'absolute',
        bottom: '0',
        height: '8px',
        width: '100%',
        backgroundColor: '',
        zIndex: '20'
    }

    if ( props.data ) {
        cardStyle.backgroundImage = `url(${props.data.bgImage})`;
        if ( props.data.cat === cats.music ) {
            line.backgroundColor = '#A9DCAE';
        } else if ( props.data.cat === cats.photo ) {
            line.backgroundColor = '#FEAD73';
        } else {
            line.backgroundColor = '#C893F1';
        }
    }

    return (
        <div style={ cardStyle }>
            <div style={ line }></div>
        </div>
    )
}