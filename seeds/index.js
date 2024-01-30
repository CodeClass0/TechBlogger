const sequelize = require('../config/connection');
const blogPosts = require('./blogPostData');
const comments = require('./commentData');
const userSeed = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userSeed();
  await blogPosts();
  await comments();


  process.exit(0);
};

seedAll();
