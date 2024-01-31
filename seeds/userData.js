const { User } = require('../models');

const userData = [
    {
        username: "sample",
        email: "soandso@gmail.com",
        password: "12345678"
    },
    {
        username: "Jake ",
        email: "delhomme@gmail.com",
        password: "12345678"
    }];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;