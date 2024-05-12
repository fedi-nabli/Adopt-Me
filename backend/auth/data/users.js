import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Fedi Nabli',
    email: 'fedinabli@gmail.com',
    password: bcrypt.hashSync('12345678', 10),
    image: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
    age: 19,
    phoneNumber: '29669933',
    address: {
      country: 'Tunisia',
      city: 'Sousse',
      postalCode: 4051,
      fullAddress: 'Sousse, Tunisia 4051',
      type: 'Home'
    },
    isAdmin: true
  },
  {
    name: 'Ahmed Louhaichi',
    email: 'bouhmid@gmail.com',
    password: bcrypt.hashSync('12345678', 10),
    image: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
    age: 25,
    phoneNumber: '29669935',
    address: {
      country: 'Tunisia',
      city: 'Sousse',
      postalCode: 4051,
      fullAddress: 'Sousse, Tunisia 4051',
      type: 'Work'
    },
    isAdmin: true
  },
  {
    name: 'Yasmine Daouas',
    email: 'yasmine@gmail.com',
    password: bcrypt.hashSync('12345678', 10),
    image: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
    age: 23,
    phoneNumber: '29669934',
    address: {
      country: 'Tunisia',
      city: 'Sousse',
      postalCode: 4051,
      fullAddress: 'Sousse, Tunisia 4051',
      type: 'University'
    },
    isAdmin: false
  },
  {
    name: 'Nermine Amara',
    email: 'nermine@gmail.com',
    password: bcrypt.hashSync('12345678', 10),
    image: 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png',
    age: 20,
    phoneNumber: '29669936',
    address: {
      country: 'Tunisia',
      city: 'Sousse',
      postalCode: 4051,
      fullAddress: 'Sousse, Tunisia 4051',
      type: 'School'
    },
    isAdmin: false
  }
]

export default users