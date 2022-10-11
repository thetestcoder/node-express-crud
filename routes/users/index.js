const express = require('express');
const router = express.Router();

// CONTROLLERS

const UserController = require('../../app/controllers/UserController')


router.get('/', UserController.index);
router.get('/create', UserController.create);
router.post('/create', UserController.store);
router.get('/user/:id', UserController.show);
router.post('/user/:id', UserController.update);
router.post('/user/delete/:id', UserController.delete);

module.exports  = router;

