import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    console.log('not found')
    return (
        <div id='wrapper'>
        <div id='misc_content'>
            <div className='about_text on_paper'>
                <h1>Not Found</h1>
                <br />
                <p>You've lost your way!</p>
                <p>Seems like a good opportunity to go <Link exact to='/'>home</Link>.</p>
            </div>
        </div>
    </div>
    )
}