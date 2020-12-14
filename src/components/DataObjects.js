import { cats, cardSize } from './DataEnums'
import atl_bg from '../images/atl_bg.jpeg'
import tetris_bg from '../images/tetris_bg.png'

const jharding = {
    id: 4,
    bgImage: {
        img1: 'https://static1.squarespace.com/static/5b8ab570506fbef07bfc6874/t/5d34bc1aa472a70001dc183e/1563737122110/web-jharding-1.jpg',
        img2: 'https://static1.squarespace.com/static/5b8ab570506fbef07bfc6874/t/5d34bc3a809728000150c694/1563737155275/web-jharding-2.jpg',
        img3: 'https://static1.squarespace.com/static/5b8ab570506fbef07bfc6874/t/5d34bc73a472a70001dc1dba/1563737209870/web-jharding-3.jpg'
    },
    title: 'Jessica Harding - Dancer',
    descrip: 'Jessica Harding is a dancer who contacted me for some headshots. We found spots in St. James Park in London and these are the resulting images.',
    cat: cats.photo,
    size: cardSize.rect
}
const rdelooze = {
    id: 3,
    bgImage: {
        img1: 'https://static1.squarespace.com/static/5b8ab570506fbef07bfc6874/t/5c2a3bc44ae2379d32307198/1546271691216/web-rachel-delooze-1.jpg',
        img2: 'https://static1.squarespace.com/static/5b8ab570506fbef07bfc6874/t/5c2a3c664fa51a03a89bbd1f/1546271851755/web-rachel-delooze-2.jpg',
        img3: 'https://static1.squarespace.com/static/5b8ab570506fbef07bfc6874/t/5c2a3c80cd836676a1abbdb1/1546271877839/web-rachel-delooze-3.jpg',
        img4: 'https://static1.squarespace.com/static/5b8ab570506fbef07bfc6874/t/5c2a3c9b2b6a28bef1a99958/1546271904742/web-rachel-delooze-4.jpg',
        img5: 'https://static1.squarespace.com/static/5b8ab570506fbef07bfc6874/t/5c2a3cb3c2241bc8b4f48894/1546271928575/web-rachel-delooze-5.jpg'
    },
    title: 'Rachel Delooze - Singer and Actor',
    descrip: 'Rachel, a singer and actor, joined me in the New Forest to take her headshots.',
    cat: cats.photo,
    size: cardSize.rect
}
const atl = {
    id: 2,
    bgImage: {
        img1: atl_bg
    },
    title: 'All the Lights',
    descrip: 'All the Lights is a song written by Rachel Delooze which I produced, recorded and mixed.',
    cat: cats.music,
    size: cardSize.square
}
const tetris = {
    id: 1,
    bgImage: {
        img1: tetris_bg
    },
    title: 'Building Tetris',
    descrip: 'A personal project while I was quarantined, floating in the Gulf of Mexico, I recreated Tetris with Python.',
    cat: cats.prog,
    size: cardSize.square
}

export const DataObjects = [jharding, rdelooze, atl, tetris]
