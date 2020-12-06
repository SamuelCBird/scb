import { cats, cardSize } from './DataEnums'
import atl_bg from '../images/atl_bg.jpeg'
import jharding_bg from '../images/jharding_bg.jpg'
import  rdelooze_bg from '../images/rdelooze_bg.jpg'
import tetris_bg from '../images/tetris_bg.png'

const jharding = {
    bgImage: jharding_bg,
    cat: cats.photo,
    size: cardSize.rect
}
const rdelooze = {
    bgImage: rdelooze_bg,
    cat: cats.photo,
    size: cardSize.rect
}
const atl = {
    bgImage: atl_bg,
    cat: cats.music,
    size: cardSize.square
}
const tetris = {
    bgImage: tetris_bg,
    cat: cats.prog,
    size: cardSize.square
}

export const DataObjects = [jharding, rdelooze, atl, tetris]
