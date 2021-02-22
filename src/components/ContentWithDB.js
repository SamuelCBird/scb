import React, { useEffect, useState } from 'react';
import db from './Firestore';

const ContentWithDB = () => {
    const [dbData, setDbData] = useState([])

    useEffect(() => {
        db.collection('portfolio_data').get().then(snapshot => {
            snapshot.forEach(item => {
                setDbData(prevItems => [
                    ...prevItems,
                    item.data().title, 
                    item.data().description
                ])
            })
        })
    }, [])

    return (

        <div id="wrapper">
            <div className="content">
                <ul>
                    {
                        dbData.map(tit => {
                            return <li>{tit}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ContentWithDB;