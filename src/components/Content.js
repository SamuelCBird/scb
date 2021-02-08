import React, { useEffect, useState } from 'react';
import { useLocation, Link, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Card } from './Card';
import { DataObjects } from './DataObjects';
import { Lightbox } from './Lightbox';
import ls from 'local-storage';
import { motion, AnimatePresence } from 'framer-motion';

export const Content = ({match}) => {
    const location = useLocation();
    const map_location = location.pathname.slice(1);
    const data = DataObjects;
    const [welcomeVisible, setWelcomeVisible] = useState(false);

    useEffect(() => {
        if (ls('scb_welcome_message') === false) {
            setWelcomeVisible(false);
        } 
        else {
            setWelcomeVisible(true);
        }
    }, [])

    useEffect(() => {
        ls("scb_welcome_message", welcomeVisible)
    }, [welcomeVisible])

    const closeWelcome = () => {
        setWelcomeVisible(false);
    }   

    return (
        <div id="wrapper">
            <div className='content'>

            <AnimatePresence>
                {
                    welcomeVisible && (
                        <motion.div
                        animate={{}}
                        exit={{ opacity: 0 }}
                        id="welcome_note">
                            <div id="close_button" onClick={closeWelcome}>x</div>
                            <h2>Hi, I'm Sam!</h2>
                            <h3>Here are some of the things I've done. So why not get a cup of tea, make yourself at home and take a look around.</h3>
                        </motion.div> 
                    )
                }
            </AnimatePresence>

                    { data.map(item => {
                        if ( map_location !== '' ) {
                            if ( item.cat === map_location ) {
                                return <Link to={`/${item.cat}/${item.id}`} key={item.id}><Card data={item} key={item.id} /></Link>
                            }
                            return null
                        } else {
                            return <Link to={`/${item.cat}/${item.id}`} key={item.id}><Card data={item} key={item.id} /></Link>
                        }
                    }) }
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