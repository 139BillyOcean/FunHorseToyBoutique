{
  "dateCreated": "2022-01-29T20:40:02.042Z",
  "user": "61f889eb145fe868b3c6979d",
  "name": "Black Lotus",
  "condition": "new",
  "brand": "hasbro",
  "yearManufactured": 1991,
  "tags": ["magic: the gathering", "trading card"],
  "photos": ["https://static.cardkingdom.com/images/magic-the-gathering/alpha/black-lotus-28010.jpg",
    "https://c1.scryfall.com/file/scryfall-cards/large/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
    "https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a2e428c-dd25-484c-bbc8-2d6ce10ef42c.jpg?1559591808",
    "https://proxyking.biz/wp-content/uploads/2020/10/il_fullxfull.2636242647_dm4a.jpg",
    "https://cdn.vox-cdn.com/thumbor/_Y08cn1Z7qhI8n-fg2cTkLJ8ce0=/0x0:2060x1380/920x613/filters:focal(1192x179:1520x507):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68731700/black_lotus_2.0.jpg"
  ],
  "quantity": 4,
  "price": {
      "original": 500,
      "sale": 499.99
  },
  "description": "Its just four pencils",
  "ratings": [
      1,
      0,
      0,
      2,
      2
  ],
  "_id": "61f89422edbb84b70e40df31",
  "reviews": [{
    "body": "I hate this card.",
    "reviewer": "Joe",
    "date": 1643488802042,
    "answers": [{
      "body": "Sucks to be you",
      "date": 1643488802042,
      "answerer": "Bobby"
    }]
  }]
  "__v": 0
}


db.toys.insertMany([
  {
    dateCreated: 1643487965394,
    user: 'User02',
    name: 'Four Pencils',
    condition: 'used',
    brand: 'Ticonderoga',
    yearManufactured: 2019,
    tags: ['Pencil'],
    photos: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diys.com%2Fpencils-that-will-make-studying-more-fun%2F&psig=AOvVaw13XYCdMg2h_-CiNiHcmuhR&ust=1643574645123000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjZhunm1_UCFQAAAAAdAAAAABAF'
    ],
    price: {
      original: 500,
      sale: 499.99
    },
    quantity: 4,
    description: 'Its just four pencils',
    ratings: [1, 0, 0, 2, 2],
    reviews: [{
      body: 'Why?',
      date: 1643488605908,
      reviewer: 'Joe',
      answers: [{
        body: 'cus',
        date: 1643488606708,
        answerer: 'User01'
      }, {
        body: 'Its clearly a joke post',
        date: 1643488802042,
        answerer: 'Dave'
      }]
    }]
  },
  {
    dateCreated: 1643488802042,
    user: 'Bobby',
    name: 'Black Lotus',
    condition: 'new',
    brand: 'hasbro',
    yearManufactured: 1991,
    tags: ['magic: the gathering', 'trading card'],
    photos: ['https://static.cardkingdom.com/images/magic-the-gathering/alpha/black-lotus-28010.jpg',
      'https://c1.scryfall.com/file/scryfall-cards/large/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838',
      'https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a2e428c-dd25-484c-bbc8-2d6ce10ef42c.jpg?1559591808',
      'https://proxyking.biz/wp-content/uploads/2020/10/il_fullxfull.2636242647_dm4a.jpg',
      'https://cdn.vox-cdn.com/thumbor/_Y08cn1Z7qhI8n-fg2cTkLJ8ce0=/0x0:2060x1380/920x613/filters:focal(1192x179:1520x507):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68731700/black_lotus_2.0.jpg',
      'https://cdn.vox-cdn.com/thumbor/6TzV2C-yoO6w-q9ROkxdxhRcE0s=/0x0:705x1240/920x0/filters:focal(0x0:705x1240):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22264103/black_lotus.jpg',
      'https://customizedmtg.com/wp-content/uploads/2020/11/Pic-3-64-600x837.jpg.webp'
    ],
    price: {
      original: 100000,
      sale: null
    },
    quantity: 1,
    description: 'The best magic card to ever exist.',
    ratings: [0, 3, 5],
    reviews: [{
      body: 'I hate this card.',
      reviewer: 'Joe',
      date: 1,
      answers: [{
        body: 'Sucks to be you',
        date: 1,
        answerer: 'Bobby'
      }]
    }]
  },
  {
    dateCreated: 1643503505151,
    user: 'User04',
    name: 'A duck',
    condition: 'new',
    brand: 'Pond',
    yearManufactured: 2020,
    tags: ['Animal', 'Pet'],
    photos: ['https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fhow-to-keep-ducks-call-ducks-1615457181.jpg%3Fresize%3D640%3A*&imgrefurl=https%3A%2F%2Fwww.countryliving.com%2Fuk%2Fwildlife%2Ffarming%2Fhow-to%2Fa232%2Fkeeping-ducks%2F&tbnid=TWbK27CbQZJ3tM&vet=12ahUKEwiv6Pjyn9j1AhUSI30KHXmoAVEQMygBegUIARDaAQ..i&docid=FzWHp14myrkFDM&w=640&h=427&itg=1&q=duck&ved=2ahUKEwiv6Pjyn9j1AhUSI30KHXmoAVEQMygBegUIARDaAQ'
    ],
    price: {
      original: 20,
      sale: null
    },
    quantity: 1,
    description: 'I found this in a pond',
    ratings: [5],
    reviews: [{
      body: 'Why?',
      date: 1643503505151,
      reviewer: 'Joe',
      answers: []
    }]
  },
  {
    dateCreated: 1643503662626,
    user: 'User02',
    name: 'Car',
    condition: 'used',
    brand: 'Hot Wheels',
    yearManufactured: 2010,
    tags: ['Car', 'Race', 'Toy'],
    photos: ['https://www.google.com/imgres?imgurl=https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_a62ce430-dfbb-4d87-99ec-367ac1613dd5%3Fwid%3D488%26hei%3D488%26fmt%3Dpjpeg&imgrefurl=https%3A%2F%2Fwww.target.com%2Fp%2Fhot-wheels-diecast-cars-5pk-colors-may-vary%2F-%2FA-14783201&tbnid=ZLuLoCVSsPR7vM&vet=12ahUKEwiE8oDIoNj1AhUxLDQIHc8-BR0QMygAegUIARDuAg..i&docid=WfdaGMPlU0uSQM&w=488&h=488&itg=1&q=hot%20wheel%20car&ved=2ahUKEwiE8oDIoNj1AhUxLDQIHc8-BR0QMygAegUIARDuAg'
    ],
    price: {
      original: 10,
      sale: 5
    },
    quantity: 99,
    description: 'These Hot wheels were found in a time capsule',
    ratings: [5, 4, 4, 4, 5, 2, 3, 4, 4, 1, 5],
    reviews: [{}]
  },
  {
    dateCreated: 1643503662626,
    user: 'User05',
    name: 'D&D book',
    condition: 'new',
    brand: 'Wizards of the Coast',
    yearManufactured: 2021,
    tags: ['Book', 'RPG', 'rpg', 'ttrpg'],
    photos: ['https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81pViXqeVLL._AC_SL1500_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FPlayers-Handbook-Dungeons-Dragons-Wizards%2Fdp%2F0786965606&tbnid=S6QHJFdzNPUuBM&vet=12ahUKEwiUtu6Qodj1AhXkAjQIHVXfBZAQMygAegUIARDEAg..i&docid=iTFSFrk967aIrM&w=1146&h=1500&itg=1&q=dnd%20phb&ved=2ahUKEwiUtu6Qodj1AhXkAjQIHVXfBZAQMygAegUIARDEAg'
    ],
    price: {
      original: 30,
      sale: null
    },
    quantity: 2,
    description: 'The starter book for the best RPG ever',
    ratings: [3, 5, 5, 3, 4, 2, 1],
    reviews: [{
      body: 'Pathfinder is BETTER',
      date: 1643504016769,
      reviewer: 'Jakson',
      answers: [{}]
    }]
  },
]);

db.users.insertMany([
  {
    _id: '61f889eb145fe868b3c6979c',
    username: 'User01',
    name: 'John',
    email: 'test01@gmail.com',
    password: 'password01',
    address: {
      street: '33 west street',
      city: 'Austin',
      state: 'Texas',
      zipcode: 330987
    },
    date: 1643487822595,
    purchases: [
      {
        id: '61f889eb145fe868b3c69791',
        dateCreated: 1643487965394,
        user: 'User02',
        name: 'Four Pencils',
        condition: 'used',
        brand: 'Ticonderoga',
        yearManufactured: 2019,
        tags: ['Pencil'],
        photos: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diys.com%2Fpencils-that-will-make-studying-more-fun%2F&psig=AOvVaw13XYCdMg2h_-CiNiHcmuhR&ust=1643574645123000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjZhunm1_UCFQAAAAAdAAAAABAF'
        ],
        price: {
          original: 500,
          sale: 499.99
        },
        quantity: 4,
        description: 'Its just four pencils',
        ratings: [1, 0, 0, 2, 2],
        reviews: [{
          body: 'Why?',
          date: 1643488605908,
          reviewer: 'Joe',
          answers: [{
            body: 'cus',
            date: 1643488606708,
            answerer: 'User01'
          }, {
            body: 'Its clearly a joke post',
            date: 1643488802042,
            answerer: 'Dave'
          }]
        }]
      }
    ]
  },
  {
    username: 'User02',
    name: 'Jane',
    email: 'test02@gmail.com',
    password: 'password02',
    address: {
      street: '33 South street',
      city: 'Detroit',
      state: 'Wisconsin',
      zipcode: 777777
    },
    date: 1643487992595,
    listings: [
      {
        id: 1,
        dateCreated: 1643487965394,
        user: 'User02',
        name: 'Four Pencils',
        condition: 'used',
        brand: 'Ticonderoga',
        yearManufactured: 2019,
        tags: ['Pencil'],
        photos: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diys.com%2Fpencils-that-will-make-studying-more-fun%2F&psig=AOvVaw13XYCdMg2h_-CiNiHcmuhR&ust=1643574645123000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjZhunm1_UCFQAAAAAdAAAAABAF'
        ],
        price: {
          original: 500,
          sale: 499.99
        },
        quantity: 4,
        description: 'Its just four pencils',
        ratings: [1, 0, 0, 2, 2],
        reviews: [{
          body: 'Why?',
          date: 1643488605908,
          reviewer: 'Joe',
          answers: [{
            body: 'cus',
            date: 1643488606708,
            answerer: 'User01'
          }, {
            body: 'Its clearly a joke post',
            date: 1643488802042,
            answerer: 'Dave'
          }]
        }]
      }
    ]
  },
  {
    id: 3,
    username: 'User03',
    name: 'Mozzie',
    email: 'test03@gmail.com',
    password: 'password03',
    address: {
      street: '22 Davenwood',
      city: 'Unix',
      state: 'Kansas',
      zipcode: 984520
    },
    date: 1643482492595
  },
  {
    id: 4,
    username: 'User04',
    name: 'Jakson',
    email: 'test04@gmail.com',
    password: 'password04',
    address: {
      street: '50 Weest rd',
      city: 'Paris',
      state: 'Texas',
      zipcode: 349236
    },
    date: 1643489492595
  },
  {
    _id: '61f84088f6630f99b59136ab',
    username: 'User05',
    name: 'Fidore',
    email: 'test05@gmail.com',
    password: 'password05',
    address: {
      street: '32 Joeniss',
      city: 'Newport',
      state: 'New Jersey',
      zipcode: 997359
    },
    date: 1643482492595
  },
]);