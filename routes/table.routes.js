const express = require('express')
const router = express.Router();
const tablController = require('../controllers/TableController');

router.get('/',tablController.getAll );

module.exports = router;