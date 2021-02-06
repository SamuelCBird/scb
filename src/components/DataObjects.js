import { cats, cardSize } from './DataEnums'
import atl_bg from '../images/atl_bg.jpeg'
import tetris_bg from '../images/tetris_bg.png'

const atl = {
    id: null,
    bgImage: {
        img1: atl_bg
    },
    title: 'All the Lights',
    descrip: 'All the Lights is a song written by Rachel Delooze which I produced, recorded and mixed.',
    cat: cats.music,
    size: cardSize.square
}
const tetris = {
    id: null,
    bgImage: {
        img1: tetris_bg
    },
    title: 'Building Tetris',
    descrip: 'A personal project while I was quarantined, floating in the Gulf of Mexico, I recreated Tetris with Python.',
    cat: cats.prog,
    size: cardSize.square
}
const sweeper = {
    id: null,
    bgImage: {
        img1: 'https://i.imgur.com/pQAzhTZ.png'
    },
    title: 'Minesweeper Clone',
    descrip: 'I\'m sure many that have grown up from the 90s remember playing Minesweeper on their Windows machine. A simple yet engaging puzzle. It was one of the first games that I challenged myself to make and it came with a lot of frustration and confusion, but when it worked it was exhilirating. Built with Python and the Pygame library.',
    cat: cats.prog,
    size: cardSize.square     
}
const jharding = {
    id: null,
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
    id: null,
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
const ushuaia1 = {
    id: null,
    bgImage: {
        img1: 'https://static1.squarespace.com/static/5b8ab570506fbef07bfc6874/5b8d1c9a40ec9a2651e91b44/5b8d95de88251b17eb3d66f6/1610886138221/Ushuaia-3.jpg?format=1000w'
    },
    title: 'Ushuaia, Argentina',
    descrip: 'At the very southern tip of South America lies the town of Ushuaia. They call it Fin Del Mundo - The End of the World. Despite the nickname, it is one of the most beautiful places I have visited; picturesque as they come, the small town is set against the beautiful backdrop of the Andies. I couldn\'t take my eyes off this almost dystopian landscape featuring one solitary person.',
    cat: cats.photo, 
    size: cardSize.rect
}
const iceberg = {
    id: null,
    bgImage: {
        img1: 'https://images.squarespace-cdn.com/content/5b8ab570506fbef07bfc6874/1536004017547-EJVUJA61N1CMJ0UMBFWI/Antarctica-1.jpg?content-type=image%2Fjpeg'
    },
    title: 'Antarctica',
    descrip: 'Whilst working as a musician on cruise ships I got to see a lot of things but not many quite like this. I feel very priviledged to have seen a small fraction of the beauty of Antarctica. We sailed into Paradise Bay and the ship rotated for a couple of hours on the spot. Needless to say everyone was spellbound by the beauty.',
    cat: cats.photo,
    size: cardSize.rect
}   

var DataObjects = [atl, tetris, sweeper, jharding, rdelooze, ushuaia1, iceberg]

var i = DataObjects.length;

DataObjects.forEach((data) => {
    data.id = i;
    i--;
})

export { DataObjects };
