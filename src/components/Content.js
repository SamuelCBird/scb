import React from 'react';
import { useLocation, Link, Route, Switch } from 'react-router-dom';
import { Card } from './Card';
import { DataObjects } from './DataObjects';
import { Lightbox } from './Lightbox';

export const Content = ({match}) => {
    const location = useLocation().pathname.slice(1);
    const data = DataObjects;

    return (
        <div style={{height: 0, display: 'flex', justifyContent: 'center'}}>
            <div className='content'>
                { data.map(item => {
                    if ( location !== '' ) {
                        if ( item.cat === location ) {
                            return <Link to={`/${item.cat}/${item.id}`} key={item.id}><Card data={item} key={item.id} /></Link>
                        }
                        return null
                    } else {
                        return <Link to={`/${item.cat}/${item.id}`} key={item.id}><Card data={item} key={item.id} /></Link>
                    }
                }) }
                
            </div>

            <Switch>
                    <Route exact path={`${match.path}/:id`} 
                        render={(props) => (
                            <Lightbox {...props} />
                        )} />
            </Switch>
        </div>
    )
}