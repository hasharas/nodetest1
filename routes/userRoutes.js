const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();


router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUserById);


module.exports = router;