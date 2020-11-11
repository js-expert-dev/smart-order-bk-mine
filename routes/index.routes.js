const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middlewares/auth.middleware');


function routes() {

    const user = require('./user.routes');
    const category = require('./category.routes');
    const items = require('./items.routes');
    const table = require('./table.routes');
    router.use('/user', user);
    router.use('/category', category);
    router.use('/items', items);
    router.use('/table', table)
    return router;
}

module.exports = routes();