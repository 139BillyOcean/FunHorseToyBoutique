export const toys = [
  {
    id: 1
    dateCreated: 1643487965394,
    user: 'User01'
    name: 'Four Pencils',
    condition: 'used',
    brand: 'Ticonderoga',
    yearManufactured: 2019,
    tags: ['Pencil'],
    photos['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diys.com%2Fpencils-that-will-make-studying-more-fun%2F&psig=AOvVaw13XYCdMg2h_-CiNiHcmuhR&ust=1643574645123000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjZhunm1_UCFQAAAAAdAAAAABAF'],
    price: {
      original: 500
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
    id: 2,
    dateCreated: 1,
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
      original: 100000
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
  }
]