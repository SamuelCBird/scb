import React from 'react';
import { cats, cardSize } from './DataEnums'

export const Card = (props) => {
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
        // populate bg image
        const image = props.data.bgImage[0];
        console.log(image);
        cardStyle.backgroundImage = `url(${image})`;

        // colour line
        if ( props.data.cat === cats.music ) {
            line.backgroundColor = '#A9DCAE';
        } else if ( props.data.cat === cats.photo ) {
            line.backgroundColor = '#FEAD73';
        } else {
            line.backgroundColor = '#C893F1';
        }

        // rect or square
        if ( props.data.size === cardSize.square ) {
            cardStyle.width = '160px';
        } else {
            cardStyle.width = '200px';
        }
    }

    return (
        <div id='card' style={ cardStyle }>
            <div id='forhover'></div>
            <div style={ line }></div>
        </div>
    )
}