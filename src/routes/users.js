const express = require('express');

const UserController = require('../controller/users');

const router = express.Router();

//CREATE
router.post('/', UserController.createNewUser);

//GET or READ
router.get('/', UserController.getAllUsers);

//UPDATE
router.patch('/:idUser', UserController.updateUser);

//DELETE
router.delete('/:idUser', UserController.deleteUser);


module.exports = router;