import React from 'react';

export const RectangularCard = () => {
    const cardStyle = {
        position: 'relative',
        margin: '20px 20px 0 0',
        border: '5px solid #fff',
        width: '200px',
        height: '160px',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        backgroundImage: ''
    }
    const line = {
        position: 'absolute',
        bottom: '0',
        height: '8px',
        width: '100%',
        backgroundColor: '#A9DCAE',
        zIndex: '20'
    }
    return (
        <div style={ cardStyle }>

            <div style={ line }></div>
        </div>
    )
}