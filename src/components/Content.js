import React from 'react';
import { Card } from './Card'
import { DataObjects } from './DataObjects'

export function Content() {
    return (
        <div id='content'>
            { DataObjects.map(item => {
                if ( window.location.pathname.slice(1) !== '' ) {
                    if ( item.cat === window.location.pathname.slice(1) ) {
                        return <Card data={item} />
                    }
                    return null
                } else {
                    return <Card data={item} />
                }
            }) }
        </div>
    )
}