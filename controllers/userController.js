const UserModel = require('../models/user.model');
const defaultResponse = require('../utils/defaultResponse');
const responseCodes = require('../utils/responseCodes');
const bcrypt = require('bcrypt');
const CONSTANTS = require('../utils/constants');


exports.seeding = async function (req, res) {
    try {
        req.body = {
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'password',
            isAdmin: true,
        };

        await exports.create(req, res);

    } catch (error) {
        defaultResponse().error({message: err.message}, res, responseCodes.SERVER_ERROR);
    }

};

exports.getAll =async function(req, res){
    try {
        const response = await UserModel.find();
        defaultResponse().success(CONSTANTS.DATA_RETRIEVED,response,res,responseCodes.SUCCESS)
    } catch (error) {
        defaultResponse().error({message: err.message}, res, responseCodes.SERVER_ERROR)
    }
}

exports.create = async function (req, res) {
    try {
        const requestBody = req.body;
        bcrypt.hash(requestBody.password, 10, async (error, hash) => {
            if (error) {
                console.log('Error: ' + error.message);
                defaultResponse({message: error.message}, res, responseCodes.SERVER_ERROR)
            } else {
                requestBody.password = hash;
                const user = new UserModel(requestBody);
                await user.save();
                defaultResponse().success(CONSTANTS.DATA_CREATED_SUCCESS, user, res, responseCodes.SUCCESS_CREATED);
            }
        });
    } catch (err) {
        defaultResponse().error({message: err.message}, res, responseCodes.SERVER_ERROR);
    }
};


exports.delete = async function(req, res) {
    try {
    const user = await UserModel.findByIdAndDelete({_id: req.params.id});
        defaultResponse().success(CONSTANTS.DATA_REMOVED_SUCCESS,user,res,responseCodes.SUCCESS);
    } catch (err) {
        defaultResponse().error({message: err.message},res, responseCodes.SERVER_ERROR)
        
    }
}