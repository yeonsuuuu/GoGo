
const Joi = require('joi');
const mongoose= require('mongoose');

const water_infoSchema = new mongoose.Schema({
    w_id: Number,
    wname: String
});

const Water_info = mongoose.model('Water_info', water_infoSchema);

//
function validateWater_info(){

    // const schema={
    //     name: Joi.string().min(3).max(50).required()
    // }
    // return Joi.validate(genre, schema);
}

exports.Water_info = Water_info;
exports.validate = validateWater_info;
module.exports.water_infoSchema = water_infoSchema;