const router = require('express').Router();
const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/dashboard', (req, res) => {
  console.log('======================');

    res.render('userDashboard', {title:'Dashboard'})
  });
// });

module.exports = router;