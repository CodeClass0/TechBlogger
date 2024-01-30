const { Post } = require('../models');

const blogdata = [
  {
    title: 'Why MVC is so important',
    post_content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    user_id: 1
  },
  // {
  //   name: 'Authentication vs. Authorization',
  //   body: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
  //   postedOn: "March 19, 2021 19:00:00",
  //   postedBy: "Xandromus"
  // },
  // {
  //   name: 'Object-Relational Mapping',
  //   body: "I have really loved learning about ORM's. It's really simplified the way I create queries in SQL!",
  //   postedOn: "March 24, 2021 16:00:00",
  //   postedBy: "Lernantino"
  // },
];

const seedBlog = () => Post.bulkCreate(blogdata);

module.exports = seedBlog;