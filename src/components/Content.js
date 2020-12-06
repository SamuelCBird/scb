import React from 'react';
import { SquareCard } from './SquareCard'
import { RectangularCard } from './RectangularCard'
import { DataObjects } from './DataObjects'

export const Content = () => {
    return (
        <div id='content'>
            { DataObjects.map(item => {
                return <SquareCard data={item} />
            }) }
            <RectangularCard />
        </div>
    )
}