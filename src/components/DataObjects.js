import { cats } from './DataEnums'
import atl_bg from '../images/atl_bg.jpeg'
import jharding_bg from '../images/jharding_bg.jpg'
import  rdelooze_bg from '../images/rdelooze_bg.jpg'
import tetris_bg from '../images/tetris_bg.png'

const jharding = {
    bgImage: jharding_bg,
    cat: cats.photo
}
const rdelooze = {
    bgImage: rdelooze_bg,
    cat: cats.photo
}
const atl = {
    bgImage: atl_bg,
    cat: cats.music
}
const tetris = {
    bgImage: tetris_bg,
    cat: cats.prog
}

export const DataObjects = [jharding, rdelooze, atl, tetris]
