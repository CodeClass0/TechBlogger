const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/dashboard', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
        where:{
            user_id: 2
        },
        include: {
        model: User,
        attributes: ['username']
      }
    });
    console.log(dbPostData);
    if (dbPostData){
        const posts = dbPostData.map((post) =>
        post.get({ plain: true })
      );
      req.session.hasPosts = true;
      res.render('dashboard', {
        hasPosts: req.session.hasPosts,
        posts,
        loggedIn: req.session.loggedIn,
      })
      console.log(posts);
      res.status(200).json(posts);
    } else {
        res.render('dashboard', {
            loggedIn: req.session.loggedIn
        })
    }


  } catch (err) {
    console.log(err);
    res.status(500).json(err);    
  }

  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  } 
  res.render('dashboard', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
