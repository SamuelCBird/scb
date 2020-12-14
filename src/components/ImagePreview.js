import React, { useState, useEffect } from 'react';

export const ImagePreview = (props) => {
    // eslint-disable-next-line
    let [selected, setSelected] = useState(false);

    useEffect(() => {
        if (props.objKey === 'img1') {
            setSelected(true);
            props.forSelection(props.src);
        }
    }, [props])

    function selectImage() {
        setSelected(true);
        props.forSelection(props.src);
    }

    let imagePreviewStyle = {
        backgroundImage: `url(${props.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'norepeat',
        cursor: 'pointer',
        height: '80px',
        width: '80px',
        padding: '0',
        margin: '5px'
        // have to rethink the selection logic
        // padding: `${ !selected ? '5px' : '0'}`,
        // border: `${ selected ? '5px solid #232323' : '0px'}`
    }
    return (
        <div onClick={selectImage} style={imagePreviewStyle}></div>
    )
}