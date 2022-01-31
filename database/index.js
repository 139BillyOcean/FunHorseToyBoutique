const mongoose = require('mongoose');
const { Schema } = mongoose;

const mongoURI = 'mongodb://localhost:27017/blueOcean';

mongoose.connect(mongoURI, { useNewUrlParser: true });

const toySchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  condition: {
    type: String,
    lowercase: true,
    enum: ['new', 'used'],
    required: true
  },
  brand: {
    type: String,
    lowercase: true
  },
  yearManufactured: {
    type: Number
  },
  tags: [{
    type: String,
    lowercase: true
  }],
  photos: [{
    type: String,
    validate: {
      validator: value => validator.isURL(value, { protocols: ['http', 'https', 'ftp'], require_tld: true, require_protocol: true }),
      message: 'Must be a Valid URL'
    }
  }],
  price: {
    original: {
      type: Number,
      required: true
    },
    sale: {
      type: Number
    }
  },
  quantity: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  ratings: [{
    type: Number,
    min: 0,
    max: 5
  }],
  reviews: [{
    title: String,
    body: String,
    date: {
      type: Date,
      default: Date.now
    },
    reviewer: String,
    answers: [{
      body: String,
      date: {
        type: Date,
        default: Date.now
      },
      answerer: String
    }],
    helpful: {
      type: Number
      default: 0,
    }
  }]
});

const Toy = mongoose.model('Toy', toySchema);

// Toy.create({
//   // user: 1,
//   name: "test",
//   condition: "new",
//   price: {
//     original: 1
//   },
//   quantity: 1,
// })
//   .then((response)=>{console.log(response)})
//   .catch((err)=>{console.log(err)})

let userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate: {
      validator: (email) => {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
      },
      message: 'Please fill a valid email address'
    }
  },
  password: {
    type: String,
    required: true
  },
  address: {
    street: {
      type: String,
      required: true
    },
    street2: {
      type: String,
      default: null
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipcode: {
      type: Number,
      required: true
    },
  },
  date: {
    type: Date,
    default: Date.now
  },
  purchases: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Toy'
    }],
    default: []
  },
  listings: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Toy'
    }],
    default: []
  }
});

let User = mongoose.model('User', userSchema);

// User.create({
//   // id: ObjectId,
//   // date: default now
//   // purchases: default [],
//   // listings: default []
//   username: 'helloworld',
//   name: 'Hello World',
//   email: 'helloworld@gmail.com',
//   password: '1234',
//   address: {
//     street: '101 Blue Ocean Drive',
//     city: 'Tampa',
//     state: 'FL',
//     zipcode: 12345
//   }
// });

module.exports.User = User;
module.exports.Toy = Toy;
