const router = require('express').Router();
// const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');

    res.render('index', {title:'travel planner'})
  });
// });

// get single post
router.get('/post/:id', (req, res) => {
  
});

router.get('/login', (req, res) => {

});

module.exports = router;
