import React, { useEffect, useState } from 'react';
import { storage } from './FirestoreSecret';
import '../styles/ImageView.css';

export const ImageView = (props) => {
    const [imageURL, setImageURL] = useState();
    const [hasLoaded, sethasLoaded] = useState(false);

    useEffect(() => {
        const reference = storage.ref(props.imgs)
        
        reference.getDownloadURL().then(url => {
            setImageURL(url);
            sethasLoaded(true)
        }).catch(error => {
            // Avoids error in console. I think error is bug, doesn't seem to affect the working of the component.
        })
    }, [props.imgs])

    if (hasLoaded) {
        return <img id="imageViewImage" src={imageURL} alt=' '></img>
    } else {
        return (
            <div id='imageViewImage' className='loader'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}