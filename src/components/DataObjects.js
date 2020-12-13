import { cats, cardSize } from './DataEnums'
import atl_bg from '../images/atl_bg.jpeg'
import jh1 from '../images/web-jharding-1.jpg'
import jh2 from '../images/web-jharding-2.jpg'
import jh3 from '../images/web-jharding-3.jpg'
import rdelooze_bg from '../images/rdelooze_bg.jpg'
import tetris_bg from '../images/tetris_bg.png'

const jharding = {
    id: 4,
    bgImage: [jh1, jh2, jh3],
    title: 'Jessica Harding - Dancer',
    descrip: 'Jessica Harding is a dancer who contacted me for some headshots. We found spots in St. James Park in London and these are the resulting images.',
    cat: cats.photo,
    size: cardSize.rect
}
const rdelooze = {
    id: 3,
    bgImage: [rdelooze_bg],
    title: 'Rachel Delooze - Singer and Actor',
    descrip: 'Rachel, a singer and actor, joined me in the New Forest to take her headshots.',
    cat: cats.photo,
    size: cardSize.rect
}
const atl = {
    id: 2,
    bgImage: [atl_bg],
    title: 'All the Lights',
    descrip: 'All the Lights is a song written by Rachel Delooze which I produced, recorded and mixed.',
    cat: cats.music,
    size: cardSize.square
}
const tetris = {
    id: 1,
    bgImage: [tetris_bg],
    title: 'Building Tetris',
    descrip: 'A personal project while I was quarantined, floating in the Gulf of Mexico, I recreated Tetris with Python.',
    cat: cats.prog,
    size: cardSize.square
}

export const DataObjects = [jharding, rdelooze, atl, tetris]
