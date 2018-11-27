
const Joi = require('joi');
const mongoose= require('mongoose');

const utypeSchema = new mongoose.Schema({
    ut_id: Number,
});

const Utype = mongoose.model('Utype', utypeSchema);

//
function validateUtype(){

    // const schema={
    //     name: Joi.string().min(3).max(50).required()
    // }
    // return Joi.validate(genre, schema);
}

exports.Utype = Utype;
exports.validate = validateUtype;
module.exports.utypeSchema = utypeSchema;