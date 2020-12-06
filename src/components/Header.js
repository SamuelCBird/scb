import React, { useState } from 'react';

export const Header = () => {
    let [activeFilter, setFilter] = useState('scb');

    let musicListItem = {
        top: '0',
        borderLeft: '8px solid #A9DCAE'
    }
    let photographyListItem = {
        top: '0',
        borderLeft: '8px solid #FEAD73'
    }
    let programmingListItem = {
        top: '0',
        borderLeft: '8px solid #C893F1'
    }

    if ( activeFilter === 'music' ) {
        musicListItem.top = '-10px';
        photographyListItem.top = '0px';
        programmingListItem.top = '0px';
    } else if ( activeFilter === 'photography' ) {
        musicListItem.top = '0px';
        photographyListItem.top = '-10px';
        programmingListItem.top = '0px';
    } else if ( activeFilter === 'programming' ) {
        musicListItem.top = '0px';
        photographyListItem.top = '0px';
        programmingListItem.top = '-10px';
    } else if ( activeFilter === 'scb' ) {
        musicListItem.top = '0px';
        photographyListItem.top = '0px';
        programmingListItem.top = '0px';
    } else {
        musicListItem.top = '0px';
        photographyListItem.top = '0px';
        programmingListItem.top = '0px';

        setFilter('scb')
    }

    return (
        <div id='header'>
            <div id='titleMainNav'>
            <h1 onClick={ () => setFilter('scb') } >
                samuelcbird
            </h1>
                <ul id="navList">
                    <li onClick={ () => setFilter('music') }
                        style={ musicListItem }>music</li>
                    <li onClick={ () => setFilter('photography') } 
                        style={ photographyListItem }>photography</li>
                    <li onClick={ () => setFilter('programming') } 
                        style={ programmingListItem }>programming</li>
                </ul>
            </div>
                <ul id='navList2'>
                    <li>about</li>
                    <li>cv</li>
                </ul>
        </div>
    )
}
