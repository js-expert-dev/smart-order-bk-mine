const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryController');

var multer = require('multer');

var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ''));
        }
    }
);
var upload = multer({storage: storage});

router.post('/',upload.any(), categoryController.create);
router.get('/', categoryController.getAll);
router.delete('/:id', categoryController.delete);
router.delete('/', categoryController.deleteAll);
router.get('/:id', categoryController.getById);
router.put('/:id',upload.any(), categoryController.update);
module.exports = router;

