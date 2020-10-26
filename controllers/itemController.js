const ItemsModel = require('../models/items.model');
const defaultResponse = require('../utils/defaultResponse');
const CONSTANTS = require('../utils/constants');
const responseCodes = require('../utils/responseCodes');

exports.create = async function (req, res) {
    try {
        const requestBody = req.body;
        requestBody.image = req.files && req.files.length > 0 ? req.files[0].filename : null;
        const item = new ItemsModel(req.body);
        await item.save();
        defaultResponse().success(CONSTANTS.DATA_CREATED_SUCCESS, item, res, responseCodes.SUCCESS_CREATED);
    } catch (error) {
        defaultResponse().error({
            message: error.message
        }, res, responseCodes.SERVER_ERROR);
    }
}

exports.getAll = async function (req, res) {
    try {
        const response = await ItemsModel.find().populate({
            path: 'category'
        });
        defaultResponse().success(CONSTANTS.DATA_RETRIEVED, response, res, responseCodes.SUCCESS);
    } catch (error) {
        defaultResponse().error({
            message: error.message
        }, res, responseCodes.SERVER_ERROR);
    }
}