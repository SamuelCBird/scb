import React from 'react';
import { Card } from './Card'
import { cats } from './DataEnums';
import { DataObjects } from './DataObjects'

export const Content = (props) => {
    return (
        <div id='content'>
            { DataObjects.map(item => {
                if ( props.activeFilter !== cats.scb ) {
                    if ( item.cat === props.activeFilter ) {
                        return <Card data={item} />
                    }
                } else {
                    return <Card data={item} />
                }
            }) }
        </div>
    )
}