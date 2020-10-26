const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemController');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ''));
    }
});
const upload = multer({
    storage: storage
});

router.post('/', upload.any(), itemsController.create);
router.get('/', itemsController.getAll);

module.exports = router;