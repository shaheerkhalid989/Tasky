const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userController');
const signUpSchema = require('../validator/validation');
const validate = require('../middleware/validate_middleware');

router.post('/users',validate(signUpSchema), userControllers.createUser);

// router.post('/users', userControllers.createUser);

router.get('/users', userControllers.getAllUser);


router.post('/login', userControllers.loginUser);

// router.put('/users', userControllers.updateUser);

// router.delete('/users', userControllers.deleteUser);

// router.post('/admin',validateToken, userControllers.adminDashboard);

// router.get('/data', userControllers.showMessage);

module.exports = router;