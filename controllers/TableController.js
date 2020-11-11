const tableModel = require('../models/table.model');
const defaultResponse = require('../utils/defaultResponse');
const CONSTANTS = require('../utils/constants');
const responseCodes = require('../utils/responseCodes');


exports.getAll = async function (req, res) {
    try {
        const response = await tableModel.find();
        defaultResponse().success(CONSTANTS.DATA_RETRIEVED, response, res, responseCodes.SUCCESS);
    } catch (error) {
        defaultResponse().error({
            message: error.message
        }, res, responseCodes.SERVER_ERROR);
       
    }
}