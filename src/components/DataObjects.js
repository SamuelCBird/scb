import { cats, cardSize } from './DataEnums'
import all_the_lights from '../data_images/music/all_the_lights.png'
import take_me_home from '../data_images/music/take_me_home.png'
import you_and_me from '../data_images/music/you_and_me.png'
import abimpson from '../data_images/people/abimpson1.jpg'
import rdelooze1 from '../data_images/people/rdelooze1.jpg'
import jh1 from '../data_images/people/jharding1.jpg'
import jh2 from '../data_images/people/jharding2.jpg'
import hollow_sam from '../data_images/music/hollow.jpg'
import ever_met_you from '../data_images/music/met_you.jpg'
import run_every_time from '../data_images/music/run_every_time.png'
import forgiveness from '../data_images/music/forgiveness.jpg'
import dferg_hs from '../data_images/people/dferguson_headshot.jpg'
import dsm1 from '../data_images/people/dsmart1.jpg'
import dsm2 from '../data_images/people/dsmart2.jpg'
import ggal from '../data_images/people/ggaletto1.jpg'
import jsan from '../data_images/people/jsanchez1.jpg'
import robwaugh from '../data_images/people/rwaugh1.jpg'
import sbur2 from '../data_images/people/sburrell2.jpg'
import wwduo from '../data_images/people/wanderingwest1.jpg'
import tetter from '../data_images/programming/tetris.png'
import invdb from '../data_images/programming/invoice_db.png'
import sweep from '../data_images/programming/sweep.png'
import clhanger from '../data_images/programming/hangman.png'
import tram from '../data_images/programming/trample.png'
import alca from '../data_images/travel/alcatraz.jpg'
import mykitty from '../data_images/travel/mykonos-cat.png'
import santo from '../data_images/travel/santorini1.png'
import val_rose from '../data_images/travel/valetta_rose.png'
import port_ss from '../data_images/programming/portfolio.png'
import sudoku from '../data_images/programming/sudoku.png'

const yam = {
    id: null,
    bgImage: {
        img1: you_and_me
    },
    title: 'You & Me - Danny Smart',
    descrip: 'On this song of Danny\'s I played electric guitar and sang backing vocals. It\'s a beautiful song and in my opinion stands up with the best country songs!',
    cat: cats.music,
    size: cardSize.square
}
const tmh = {
    id: null,
    bgImage: {
        img1: take_me_home
    },
    title: 'Take Me Home - Danny Smart',
    descrip: 'Danny Smart is a friend I met whilst working on the high seas. He asked me to join him in a studio in Liverpool where I played organ, tambourine and sang backing vocals for his brilliant tune Take Me Home.',
    cat: cats.music,
    size: cardSize.square
}
const atl = {
    id: null,
    bgImage: {
        img1: all_the_lights
    },
    title: 'All the Lights - Rachel Delooze',
    descrip: 'All the Lights is a song written by Rachel Delooze which I produced, recorded and mixed.',
    cat: cats.music,
    size: cardSize.square
}
const tetris = {
    id: null,
    bgImage: {
        img1: tetter
    },
    title: 'Recreating Tetris',
    descrip: 'While I was stranded on to a cruise ship due to the coronavirus outbreak I decided to challenge myself and try to recreate the classic arcade game Tetris with Python and the Python library Pygame. Admittedly there are bugs, and it\'s not perfect, but I learnt a lot on this journey and I am proud to have built a playable recreation of this iconic game.',
    cat: cats.prog,
    size: cardSize.square
}
const sweeper = {
    id: null,
    bgImage: {
        img1: sweep
    },
    title: 'Minesweeper Clone',
    descrip: 'I\'m sure many that have grown up from the 90s remember playing Minesweeper on their Windows machine. A simple yet engaging puzzle. It was one of the first games that I challenged myself to make and it came with a lot of frustration and confusion, but when it worked it was exhilirating. This project helped me understand concepts such as Object Oriented Programming and Recursion. Built with Python and the Pygame library.',
    cat: cats.prog,
    size: cardSize.square     
}
const jharding1 = {
    id: null,
    bgImage: {
        img1: jh1
    },
    title: 'Jessica Harding - Dancer',
    descrip: 'Jessica Harding is a dancer who contacted me for some headshots. We found some lovely spots in St. James Park in London, taking advantage of the beautiful weather, and this is one of the resulting images.',
    cat: cats.photo,
    size: cardSize.rect
}
const jharding2 = {
    id: null,
    bgImage: {
        img1: jh2
    },
    title: 'Jessica Harding - Dancer',
    descrip: 'Another headshot from the shoot with Jess in London\'s St. James Park.',
    cat: cats.photo,
    size: cardSize.rect
}
const rdelooze = {
    id: null,
    bgImage: {
        img1: rdelooze1,
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
const abimp = {
    id: null,
    bgImage: {
        img1: abimpson
    },
    title: 'Alex Bimpson - Front End Developer',
    descrip: 'Alex and I found a random field (near a pub) in Bath where we shot some headshots, including this one.',
    cat: cats.photo,
    size: cardSize.rect
}
const dferg = {
    id: null,
    bgImage: {
        img1: dferg_hs
    },
    title: 'Darcey Ferguson - Dancer, Instructor & Model',
    descrip: 'Darcey joined me in London\'s teeming South Bank for our headshot photoshoot. We found solice from the in the famous skatepark where we got this shot.',
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
const hollow = {
    id: null,
    bgImage: {
        img1: hollow_sam
    },
    title: 'Hollow - Samuel C Bird',
    descrip: 'This is a song that I wrote, recorded, produced and mixed. It\'s the first song that I officially released and is available to stream/purchase on most online music stores. The artwork for this track is a photograph that I took in Ushuaia, Argentina.',
    cat: cats.music,
    size: cardSize.square
}
const met_you = {
    id: null,
    bgImage: {
        img1: ever_met_you
    },
    title: 'If I Ever Met You - Samuel C Bird',
    descrip: 'Another song I wrote, recorded all music, produced and mixed. My second official release, available to stream/purchase on most online music stores. I\'m hoping to write and release more songs in the future. The artwork for this song is something I designed myself inspired, inspired by infamous tower in Pisa, Italy.',
    cat: cats.music,
    size: cardSize.square
}
const ret = {
    id: null,
    bgImage: {
        img1: run_every_time
    },
    title: 'Run Every Time cover ft Rosalie Van Wengerden',
    descrip: 'Rosalie is a friend I met whilst working on the Celebrity Reflection. She was a wonderful singer in the ships cast, and we decided to put together this Gavin DeGraw cover.',
    cat: cats.music,
    size: cardSize.rect
}
const forgive = {
    id: null,
    bgImage: {
        img1: forgiveness
    },
    title: 'Forgiveness cover ft Rachel Delooze',
    descrip: 'Rachel sang in the cast on the Celebrity Infinity. We both loved this Paramore song and filmed this cover after the ship completed it\'s dry dock in Panama.',
    cat: cats.music,
    size: cardSize.rect
}
const dsmart1 = {
    id: null,
    bgImage: {
        img1: dsm1
    },
    title: 'Photoshoot for Danny Smart',
    descrip: 'Danny, in addition to asking for my musicianship on two of his songs, requested a photoshoot. We travelled to the beautiful Langsett Reservoir near his hometown of Barnsley and got some great shots.',
    cat: cats.photo,
    size: cardSize.rect
}
const dsmart2 = {
    id: null,
    bgImage: {
        img1: dsm2
    },
    title: 'Photoshoot for Danny Smart',
    descrip: 'Another of the photographs from Langsett Resevoir. The day was drizzly, cold and slightly misty and none of us could feel our extremities after the shoot. Despite the conditions being slightly uncomfortable we got a great set of photographs, one even being chosen for the cover artwork for Danny\'s track Take Me Home.',
    cat: cats.photo,
    size: cardSize.rect
}
const ggaletto1 = {
    id: null,
    bgImage: {
        img1: ggal
    },
    title: 'Shoot with Gina Galetto',
    descrip: 'Gina, a dancer, is a dear friend from my time spent on the Celebrity Infinity when, due to the coronavirus restrictions, we got stranded at sea. Once our mandatory isolation completed and we had a little more freedom again we both decided it would be fun to stretch our creative muscles and do a masked shoot. This is one of many shots which I love from that shoot.',
    cat: cats.photo,
    size: cardSize.rect
}
const jsanchez1 = {
    id: null,
    bgImage: {
        img1: jsan
    },
    title: 'Jairo Sanchez',
    descrip: 'Jairo, a lovely man I also met on the Celebrity Infinity, also wanted to shoot some pictures with me. At managing to capture Jairo\'s laugh, this became an instant favourite of mine.',
    cat: cats.photo,
    size: cardSize.rect
}
const rwaugh1 = {
    id: null,
    bgImage: {
        img1: robwaugh
    },
    title: 'Robbie Waugh',
    descrip: 'Robbie, a professional vocalist and singer-songwriter from Clitheroe, was in need of some headshots.',
    cat: cats.photo,
    size: cardSize.rect
}
const sburrell2 = {
    id: null,
    bgImage: {
        img1: sbur2
    },
    title: 'Sophie Burrell',
    descrip: 'Sophie is an influencer based in Southampton, England, and a dear friend of mine. She is rapidly growing her following online and as a very profficient guitarist and she asked my to edit this shot which was to become the cover for first official music release Tranquility. The photo was taken by Ellie Godden.',
    cat: cats.photo,
    size: cardSize.square
}
const wanderingwestduo = {
    id: null,
    bgImage: {
        img1: wwduo
    },
    title: 'Wandering West Duo',
    descrip: 'Wandering West are a musical duo based in London, hireable for restaurants, weddings and other such events. I helped them with a photoshoot for their social media campaign.',
    cat: cats.photo,
    size: cardSize.rect
}
const invoicedb = {
    id: null,
    bgImage: {
        img1: invdb
    },
    title: 'Invoice Database',
    descrip: 'Having been self learning Python for sometime, I wanted a project. I decided to try and make an app where a business could enter client and invoice information. I used the Tkinter library to create the UI, and a MySQL database where the data would be stored.',
    cat: cats.prog,
    size: cardSize.square   
}
const hangman = {
    id: null,
    bgImage: {
        img1: clhanger
    },
    title: 'Command Line Hangman',
    descrip: 'Hangman is a game we\'ve all played at somepoint, maybe as a scribble on the corner of a school textbook. For me, an early and challenging project in my learning of Python, helped solidify my understanding of control flow and conditional programming techniques.',
    cat: cats.prog,
    size: cardSize.square   
}
const trample = {
    id: null,
    bgImage: {
        img1: tram
    },
    title: 'Trample',
    descrip: 'Trample is a project of mine that is still in progress. Built in React and using a Google Translate API the aim of the service is to take a word or phrase and in return display it translated into many different languages.',
    cat: cats.prog,
    size: cardSize.square   
}
const alcatraz = {
    id: null,
    bgImage: {
        img1: alca
    },
    title: 'Alcatraz - San Francisco, CA',
    descrip: 'Alcatraz has a fascinating history and it\'s iconic aesthetic is set to a beautiful beautiful backdrop. Just another feature that made San Francisco one of my very favourite cities.',
    cat: cats.photo,
    size: cardSize.rect
}
const mykonos1 = {
    id: null,
    bgImage: {
        img1: mykitty
    },
    title: 'Mykonos, Greece',
    descrip: 'This photograph was pure chance. I was just relaxing on some boulders when this cat joined me and, after sneaking a little closer, blessed with with a handsome photo opportunity.',
    cat: cats.photo,
    size: cardSize.rect
}
const santorini = {
    id: null,
    bgImage: {
        img1: santo
    },
    title: 'Santorini, Greece',
    descrip: 'Santorini, found in the South Aegean sea, is that picturesque location you\'ll have seen on postcards or travel agents advertisements.',
    cat: cats.photo,
    size: cardSize.rect
}
const valetta_rose = {
    id: null,
    bgImage: {
        img1: val_rose
    },
    title: 'Friends',
    descrip: 'This photograph sums up a lot for me. When it was taken I was spending an afternoon with a couple of friends at a small cafe in Valetta, Malta. Of course it reminds me of the beautiful island; and of the magic of happiness; but also it reaffirms my gratitude for having made so many wonderful friends that I know are everlasting.',
    cat: cats.photo,
    size: cardSize.rect
}
const portfolio = {
    id: null,
    bgImage: {
        img1: port_ss
    },
    title: 'Portfolio Website',
    descrip: 'I designed this portfolio site in Figma, and built it with HTML, CSS and React. I used the Framer Motion library and CSS for animations. As my first full project, I am very proud of it. But now I am looking at ways that I can improve and refine it for a better user experience and a more sleek design.',
    cat: cats.prog,
    size: cardSize.rect
}
const sudoku_site = {
    id: null,
    bgImage: {
        img1: sudoku
    },
    title: 'Sudoku solver',
    descrip: "I've always enjoyed a sudoku puzzle, and the logic behind solving one, and ever since learning to code making a sudoku solver was an ambition. After beginning to familiarise myself with Typescript I thought it would be a good first project to build with with a basic HTML / CSS / Typescript stack, and a good chance to test my core programming principles and algorithmic thinking.",
    cat: cats.prog,
    size: cardSize.rect
}

var DataObjects = [sudoku_site, portfolio, sburrell2, trample, atl, jsanchez1, ggaletto1, tetris, sweeper, invoicedb, yam, tmh, dsmart2, dsmart1, wanderingwestduo, jharding2, jharding1, rwaugh1, rdelooze, dferg, abimp, met_you, hollow, alcatraz, forgive, ushuaia1, iceberg, ret, hangman, valetta_rose, santorini, mykonos1]

var i = DataObjects.length;

DataObjects.forEach((data) => {
    data.id = i;
    i--;
})

export { DataObjects };
