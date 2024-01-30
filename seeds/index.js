const sequelize = require('../config/connection');
const blogPosts = require('./blogPostData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await blogPosts();

  process.exit(0);
};

seedAll();
