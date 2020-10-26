const CategoryModel = require('../models/category.model');
const defaultResponse = require('../utils/defaultResponse');
const CONSTANTS = require('../utils/constants');
const responseCodes = require('../utils/responseCodes');


exports.create = async function(req, res){
    try {
        const requestBody = req.body;

        requestBody.image = req.files && req.files.length > 0 ? req.files[0].filename : null;
        const category = new CategoryModel(requestBody);
        await category.save();
        defaultResponse().success(CONSTANTS.DATA_CREATED_SUCCESS, category, res, responseCodes.SUCCESS_CREATED);

    } catch (error) {
        defaultResponse().error({message: error.message}, res, responseCodes.SERVER_ERROR);
    }
}

exports.update = async (req, res)=>{
    try {
        const requestBody = req.body;
        requestBody.image = req.files && req.files.length > 0 ? req.files[0].filename : requestBody.image;
        const response = await CategoryModel.findByIdAndUpdate({_id: req.params.id},requestBody,{new: true});
        defaultResponse().success(CONSTANTS.DATA_UPDATED_SUCCESS,response , res , responseCodes.SUCCESS);
    } catch (error) {
        defaultResponse().error({message: error.message}, res, responseCodes.SERVER_ERROR);
    }
}

exports.getAll = async function(req, res) {
    try {
        const categories = await CategoryModel.find();
        defaultResponse().success(CONSTANTS.DATA_RETRIEVED, categories , res , responseCodes.SUCCESS);
    } catch (error) {
        defaultResponse().error({message: error.message}, res, responseCodes.SERVER_ERROR);
    }
}

exports.getById =async (req, res)=>{

    try {
        const response = await CategoryModel.findById(req.params.id);
        defaultResponse().success(CONSTANTS.DATA_RETRIEVED, response , res , responseCodes.SUCCESS);
    } catch (error) {
        defaultResponse().error({message: error.message}, res, responseCodes.SERVER_ERROR);
    }

}

exports.delete =async function(req, res) {
    try {
       const response= await CategoryModel.findByIdAndDelete({_id: req.params.id});
        defaultResponse().success(CONSTANTS.DATA_REMOVED_SUCCESS,response, res , responseCodes.SUCCESS);

    } catch (error) {
        defaultResponse().error({message: error.message}, res, responseCodes.SERVER_ERROR);
    }
}

exports.deleteAll = async (req, res)=>{
    try{
const response = await CategoryModel.deleteMany();
defaultResponse().success(CONSTANTS.DATA_REMOVED_SUCCESS, res , responseCodes.SUCCESS);
    }
    catch (error){
defaultResponse().error({message: error.message}, res, responseCodes.SERVER_ERROR);
    }
}