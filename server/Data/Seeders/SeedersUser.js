require('dotenv').config();
const User = require('../../models/user')
const UserFactorie = require('../factories/UserFactories');
//commande :npm run user=>insert user account
User.register(UserFactorie);
console.log('user created');

