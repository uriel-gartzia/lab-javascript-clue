// ITERATION 1

// Suspects Array

const suspectsArray = [

    mrGreen =

    {  
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green",
    },

    drOrchid =

    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white",
    },

    profPlum =

    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple",
    },

    missScarlet =

    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red",
    },
    
    mrsPeacock =

    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue",
    },

    mrMustard =

    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow",
    }

];

// Rooms Array

const roomsArray = [

    diningRoom = {
        name: "Dining Room",
    },
    conservatory = {
        name: "Conservatory",
    },

    kitchen = {
        name: "Kitchen",
    },
    
    study = {
        name: "Study",
    },

    library = {
        name: "Library",
    },

    billiardRoom = {
        name: "Billiard Room",
    },
   
    lounge = {
        name: "Lounge",
    },
    
    ballRoom = {
        name: "Ballroom",
    },

    hall = {
        name: "Hall"
    },
    
    spa = {
        name: "Spa"
    },

    livingRoom = {
        name: "Living Room"
    },

    observatory = {
        name: "Observatory"
    },

    theater = {
        name: "Theater"
    },

    guestHouse = {
        name: "Guest House"
    },
    
    patio = {
        name: "Patio"
    }
    
];

// Weapons Array

const weaponsArray = [
weapon1 = {
    name: "rope",
    weight: 10
},

weapon2 = {
    name: "knife",
    weight: 8
},

weapon3 = {
    name: "candlestick",
    weight: 2
},

weapon4 = {
    name: "dumbbell",
    weight: 30
},

weapon5 = {

    name: "poison",
    weight: 2
},


weapon6 = {

    name: "axe",
    weight: 15
},

weapon7 = {
    name: "bat",
    weight: 13
},

weapon8 = {
    name: "trophy",
    weight: 25
},

weapon9 = {
    name: "pistol",
    weight: 20
}

];


// ITERATION 2

function selectRandom(arr) {

    let randomCard = Math.floor(Math.random()*arr.length);
    return arr[randomCard];
}
selectRandom(suspectsArray)


function pickMystery(arr) {
 let thisGameRandomCard = {
    suspect: {},
    weapon: {},
    room: {},
 };

 thisGameRandomCard.suspect = selectRandom (suspectsArray);
 thisGameRandomCard.weapon = selectRandom (weaponsArray);
 thisGameRandomCard.room = selectRandom (roomsArray);

 return thisGameRandomCard;
}


// ITERATION 3

function revealMystery(envelope) {
    // console.log(`${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon} in the ${envelope.room}!`);
    return (`${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`);
    
}



