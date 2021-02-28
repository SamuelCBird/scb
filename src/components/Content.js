import React, { useEffect, useState } from 'react';
import { useLocation, Link, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Card } from './Card';
import { DataObjects } from './DataObjects';
import { Lightbox } from './Lightbox';
import { db } from './FirestoreSecret';
// import { motion, AnimatePresence } from 'framer-motion';

export const Content = ({match}) => {
    const location = useLocation();
    const map_location = location.pathname.slice(1);
    const [data, setData] = useState();

    useEffect(() => {
        db.collection('portfolio_data')
            .get()
            .then(snapshot => {
                const data = snapshot.docs.map(doc => doc.data());
                setData(data);
            })
    }, [])

    return (
        <div id="wrapper">
            <div className='content'>

                        {/* { DataObjects.map((item, i) => {
                            if ( map_location !== '' ) {
                                if ( item.cat === map_location ) {
                                    return <Link to={`/${item.cat}/${item.id}`} key={item.id} ><Card data={item} key={item.id} /></Link>
                                }
                                return null
                            } else {
                                return <Link to={`/${item.cat}/${item.id}`} key={item.id}><Card data={item} key={item.id} /></Link>
                            }
                        }) } */}

                  { data && (
                      data.map(doc => {
                          return <Card data={doc} key={doc.id} />
                      })
                  ) }

            </div>

            <Switch>
                    <LastLocationProvider>
                        <Route exact path={`${match.path}/:id`} 
                            render={(props) => (
                                    <Lightbox {...props} />
                            )} />
                    </LastLocationProvider>
            </Switch>
        </div>
    )
}