import { db, storage } from './FirestoreSecret';

const getData = () => {
    let dataArray = [];

    db.collection('portfolio_data').get().then(snapshot => {
        snapshot.forEach(item => {
            let dataOb = {};

            dataOb.id = item.id;
            dataOb.title = item.data().title;
            dataOb.description = item.data().description;
            dataOb.image = item.data().image;

            dataArray.push(dataOb);
        })
    })

    return dataArray;
}

const getImage = name => {
    storage.ref(name).getDownloadURL().then(url => {
        console.log(url)
        return url;
    });
}

export { getData, getImage };