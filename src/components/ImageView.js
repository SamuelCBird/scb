import React, { useEffect, useState } from 'react';
import { storage } from './FirestoreSecret';
import '../styles/ImageView.css';

export const ImageView = (props) => {
    const [imageURL, setImageURL] = useState();

    useEffect(() => {
        storage.ref(props.imgs).getDownloadURL().then(url => {
            setImageURL(url);
        })
    }, [props.imgs])

    let imageDisplay = {
        backgroundImage: `url(${imageURL})`
    }

    return (
            <div style={imageDisplay} id="imageViewImage"></div>
    )
}