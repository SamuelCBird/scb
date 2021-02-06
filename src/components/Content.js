import React, { useEffect, useState } from 'react';
import { useLocation, Link, Route, Switch } from 'react-router-dom';
import { Card } from './Card';
import { DataObjects } from './DataObjects';
import { Lightbox } from './Lightbox';
import ls from 'local-storage';

export const Content = ({match}) => {
    const location = useLocation().pathname.slice(1);
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

            {
                welcomeVisible ? (
                    <div id="welcome_note">
                        <div id="close_button" onClick={closeWelcome}>x</div>
                        <h2>Hi, I'm Sam!</h2>
                        <h3>Here are some of the things I've done. So why not get a cup of tea, make yourself at home and take a look around.</h3>
                    </div> 
                ) : null
            }
            
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