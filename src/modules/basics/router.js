// eslint-disable no-console //
const { Router } = require('express');

const passport = require('passport');

const registerUser = require('../../modules/users/registerUser');

const loginUser = require('../../modules/users/loginUser')

const listUser = require('../../modules/users/listUsers')

const deleteUser = require('../../modules/users/deleteUser')

const router = new Router();

// Service  API

router.use('/ping', (req, res) => {
  res.send({
    ping: 'pong',
  });
});


router.post('/api/register', (req, res) => {
  try {
    registerUser.register(req, res, () => {
      console.log('ok');
    });
  } catch (errr) {
    console.log(errr);
  }
});

router.post('/api/login', (req, res) => {
  try {
    loginUser.authenticate(req, res, () => {
      console.log('ok');
    });
  } catch (errr) {
    console.log(errr);
  }
  
});

router.get('/api/login', (req, res) => {
  try {
    listUser.show(req, res, () => {
      console.log('ok');
    });
  } catch (errr) {
    console.log(errr);
  }
  
});

router.delete('/api/login', (req, res) => {
  try {
    deleteUser.Delete(req, res, () => {
      console.log('ok');
    });
  } catch (errr) {
    console.log(errr);
  }
  
});


  


module.exports = router;
