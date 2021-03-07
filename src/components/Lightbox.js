import React, { useEffect, useState } from 'react';
import { useLastLocation } from 'react-router-last-location';
import { useHistory, Link } from 'react-router-dom';
import { ImageView } from './ImageView';
import { db } from './FirestoreSecret';
import '../styles/Lightbox.css';

export const Lightbox = (props) => {
    const history = useHistory();
    const lastLocation = useState(useLastLocation());
    const itemLink = props.match.params.id;
    const [title, setTitle] = useState();
    const [descrip, setDescrip] = useState();
    const [imageRef, setImageRef] = useState();
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const query = db.collection('portfolio_data').where('page_url', '==', itemLink).get();
        query.then(snapshot => {
            const data = snapshot.docs.map(doc => doc.data())[0];
            setTitle(data.title)
            setDescrip(data.description)
            setImageRef(data.image)
        }).catch(error => {
            setNotFound(true);
        })
    }, [itemLink])

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
                    <ImageView imgs={imageRef}/>
                    <div id='lightbox-description'>
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
                    <div style={{margin: '10px'}}>
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