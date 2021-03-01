import React, { useEffect, useState } from 'react';
import { useLocation, Link, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Card } from './Card';
// import { DataObjects } from './DataObjects';
import { Lightbox } from './Lightbox';
import { db } from './FirestoreSecret';
// import { motion, AnimatePresence } from 'framer-motion';

export const Content = ({match}) => {
    const location = useLocation();
    const map_location = location.pathname.slice(1);
    const [data, setData] = useState();

    useEffect(() => {
        db.collection('portfolio_data').orderBy('date', 'desc')
            .get()
            .then(snapshot => {
                const data = snapshot.docs.map(doc =>  [doc.id, doc.data()]);
                setData(data);
            })
    }, [ map_location])

    return (
        <div id="wrapper">
            <div className='content'>

                { data && (
                    data.map(doc => {
                        if (map_location !== '') {
                            if (doc[1].category === map_location) {
                                return <Link to={`/${doc[1].category}/${doc[1].page_url}`} key={doc[0]}><Card key={doc[0]} data={doc[1]} /></Link>
                            }
                            return null
                        } else {
                            return <Link to={`/${doc[1].category}/${doc[1].page_url}`} key={doc[0]}><Card key={doc[0]} data={doc[1]} /></Link>
                        }
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