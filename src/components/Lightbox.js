import React, { useEffect, useState } from 'react';
import { useLastLocation } from 'react-router-last-location';
import { useHistory, Link } from 'react-router-dom';
import { DataObjects } from './DataObjects';
import { ImageView } from './ImageView';
import '../styles/Lightbox.css';

export const Lightbox = (props) => {
    const history = useHistory();
    const lastLocation = useState(useLastLocation());
    const itemID = props.match.params.id;
    const [title, setTitle] = useState();
    const [descrip, setDescrip] = useState();
    const [images, setImages] = useState();
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (DataObjects.length < itemID) {
            setNotFound(true);
        } else {
            DataObjects.forEach(item => {
                if (item.id.toString() === itemID) {
                    setTitle(item.title);
                    setDescrip(item.descrip);
                    setImages(item.bgImage);
                }
            })
        }
    }, [itemID])

    const exitLightbox = () => {
        if (lastLocation[0] !== null) {
            history.goBack();
        } else {
            history.push('/');
        }
    }

    if ( !notFound ) {
        return (
            <div id='lightbox-container'>

                <div id='blackout' onClick={() => { exitLightbox() } }></div>
                <div id="lightbox-content">
                    <ImageView imgs={images}/>
                    <div style={{padding: '10px'}}>
                        <h2>{title}</h2>
                        <p>{descrip}</p>
                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <div id='lightbox-container'>

                <div id='blackout' onClick={() => { exitLightbox() } }></div>
                <div id="lightbox-content">
                    <div style={{padding: '10px'}} className='on_paper'>
                        <h1>Not Found</h1>
                        <br />
                        <p>You've lost your way!</p>
                        <p>Seems like a good opportunity to go <Link to='/'>home</Link>.</p>
                    </div>
                </div>

            </div>
        )
    }
}