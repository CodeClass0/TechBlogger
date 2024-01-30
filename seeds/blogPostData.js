const { blogPosts } = require('../models');

const blogdata = [
  {
    name: 'Why MVC is so important',
    body: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    postedOn: "September 23, 2021 08:30:00",
    postedBy: "Xandromus"
  },
  {
    name: 'Authentication vs. Authorization',
    body: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
    postedOn: "March 19, 2021 19:00:00",
    postedBy: "Xandromus"
  },
  {
    name: 'Object-Relational Mapping',
    body: "I have really loved learning about ORM's. It's really simplified the way I create queries in SQL!",
    postedOn: "March 24, 2021 16:00:00",
    postedBy: "Lernantino"
  },
];

const seedBlog = () => blogPosts.bulkCreate(blogdata);

module.exports = seedBlog;