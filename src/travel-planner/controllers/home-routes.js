const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');

    res.render('homepage', {title:'travel planner'})
  });

// get single post
router.get('/post/:id', (req, res) => {
  
});

router.get('/login', (req, res) => {
  // res.render('login');
});

module.exports = router;
