import React, { useState } from 'react';
import { cats } from './DataEnums'

export const Header = (props) => {
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

    if ( props.activeFilter === cats.music ) {
        
        musicListItem.top = '-10px';
        photographyListItem.top = '0px';
        programmingListItem.top = '0px';
    } else if ( props.activeFilter === cats.photo ) {
        musicListItem.top = '0px';
        photographyListItem.top = '-10px';
        programmingListItem.top = '0px';
    } else if ( props.activeFilter === cats.prog ) {
        musicListItem.top = '0px';
        photographyListItem.top = '0px';
        programmingListItem.top = '-10px';
    } else if ( props.activeFilter === cats.scb ) {
        musicListItem.top = '0px';
        photographyListItem.top = '0px';
        programmingListItem.top = '0px';
    } else {
        musicListItem.top = '0px';
        photographyListItem.top = '0px';
        programmingListItem.top = '0px';

        props.setter('scb')
    }

    return (
        <div id='header'>
            <div id='titleMainNav'>
            <h1 onClick={ () => props.setter(cats.scb) } >
                samuelcbird
            </h1>
                <ul id="navList">
                    <li onClick={ () => props.setter(cats.music) }
                        style={ musicListItem }>music</li>
                    <li onClick={ () => props.setter(cats.photo) } 
                        style={ photographyListItem }>photography</li>
                    <li onClick={ () => props.setter(cats.prog) } 
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
