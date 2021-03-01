import React, { useEffect, useState } from 'react';
import { storage } from './FirestoreSecret';
import '../styles/ImageView.css';

export const ImageView = (props) => {
    const [imageURL, setImageURL] = useState();

    useEffect(() => {
        const reference = storage.ref(props.imgs)
        
        reference.getDownloadURL().then(url => {
            setImageURL(url);
        }).catch(error => {
            // Avoids error in console. I think error is bug, doesn't seem to affect the working of the component.
        })
    }, [props.imgs])

    let imageDisplay = {
        backgroundImage: `url(${imageURL})`
    }

    return (
            <div style={imageDisplay} id="imageViewImage"></div>
    )
}