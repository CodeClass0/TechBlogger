const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: {
        model: User,
        attributes: ['username']
      }
    });
    //  simplified body of posts.
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }; 

  // const dbPostData = await Post.findAll({
  //   where: {
  //     user_id: req.session.user_id
  //   }
  // })

  req.session.hasPosts = true;
  res.render('dashboard', {
    loggedIn: req.session.loggedIn,
    hasPosts: req.session.hasPosts
})
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/:id', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  } 
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    
    const clean = dbPostData.get({ plain: true });
    console.log(clean);
    //check if there are any comments to show the comment block in the handlebar
    if (clean.comments[0] != null){
      res.render('individualpost', {
        commentsTrue: true,
        clean,
        loggedIn: req.session.loggedIn
        }
        )
      } else {
        res.render('individualpost', {
          clean,
          loggedIn: req.session.loggedIn
          }
        );
      };
    } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/api/:id", async (req, res) => {
  try {
      const submittedUserData = await Comment.create({
          user_id: req.body.userId,
          post_id: req.body.postId,
          comment_text: req.body.commentText
      });
      res.status(200).json(req.body.id);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});





module.exports = router;
