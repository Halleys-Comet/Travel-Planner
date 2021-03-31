const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Post } = require('../../models');


router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
      })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })

}) 

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
        id: req.params.id
        },
        include: [
          {
            model: Post,
            attributes: ['id', 'title', 'post_url', 'created_at']
          },
        ]
    }) 
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res)=> {
// expects {username: 'Johno', email: 'johno@gmail.com', password: 'password1234'}

    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

    router.post('/login',  (req, res) => {
      User.findOne({
        where: {
          email: req.body.email
        }
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user with that email address!' });
          return;
        }
  
        const validPassword = dbUserData.checkPassword(req.body.password);
  
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
        }
  
        req.session.save(() => {
          // declare session variables
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
  
          res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
      });
    });

// PUT /api/users/1
router.put('/:id', (req, res) => {

    // expects {username: 'Johno', email: 'johno@gmail.com', password: 'password1234'}
    User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.post('/logout',  (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }

});

module.exports = router;