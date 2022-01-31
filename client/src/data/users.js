export const users = [
  {
    id: 1
    username: 'User01',
    name: 'John',
    email: 'test01@gmail.com',
    password: 'password01',
    address: {
      street: '33 west street',
      street2: null
      city: 'Austin',
      state: 'Texas',
      zipcode: 330987
    },
    date: 1643487822595,
    purchases: {[
      {
        id: 1
        dateCreated: 1643487965394,
        user: 'User02'
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
      }
    ]},
    listings: {[]}
  },
  {
    id: 2
    username: 'User02',
    name: 'Jane',
    email: 'test02@gmail.com',
    password: 'password02',
    address: {
      street: '33 South street',
      street2: null
      city: 'Detroit',
      state: 'Wisconsin',
      zipcode: 777777
    },
    date: 1643487992595,
    purchases: {[]},
    listings: {[
      {
        id: 1
        dateCreated: 1643487965394,
        user: 'User02'
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
      }
    ]}
  },
  {
    id: 3
    username: 'User03',
    name: 'Mozzie',
    email: 'test03@gmail.com',
    password: 'password03',
    address: {
      street: '22 Davenwood',
      street2: null
      city: 'Unix',
      state: 'Kansas',
      zipcode: 984520
    },
    date: 1643482492595,
    purchases: {[]},
    listings: {[]}
  },
  {
    id: 4
    username: 'User04',
    name: 'Jakson',
    email: 'test04@gmail.com',
    password: 'password04',
    address: {
      street: '50 Weest rd',
      street2: null
      city: 'Paris',
      state: 'Texas',
      zipcode: 349236
    },
    date: 1643489492595,
    purchases: {[]},
    listings: {[]}
  },
  {
    id: 5
    username: 'User05',
    name: 'Fidore',
    email: 'test05@gmail.com',
    password: 'password05',
    address: {
      street: '32 Joeniss',
      street2: null
      city: 'Newport',
      state: 'New Jersy',
      zipcode: 997359
    },
    date: 1643482492595,
    purchases: {[]},
    listings: {[]}
  },
]