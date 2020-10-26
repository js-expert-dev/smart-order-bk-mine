const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/seeding', userController.seeding);
router.post('/', userController.create);
router.get('/', userController.getAll);
router.delete('/:id', userController.delete);


module.exports = router;
