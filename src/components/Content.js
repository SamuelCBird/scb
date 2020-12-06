import React from 'react';
import { Card } from './Card'
import { DataObjects } from './DataObjects'

export const Content = () => {
    return (
        <div id='content'>
            { DataObjects.map(item => {
                return <Card data={item} />
            }) }
        </div>
    )
}