
const Joi = require('joi');
const mongoose= require('mongoose');

const tagsSchema = new mongoose.Schema({
    t_id: Number,
    tname : Stirng
});

const Tags = mongoose.model('Tags', tagsSchema);

//
function validateTags(){

    // const schema={
    //     name: Joi.string().min(3).max(50).required()
    // }
    // return Joi.validate(genre, schema);
}

exports.Tags = Tags;
exports.validate = validateTags;
module.exports.tagsSchema = tagsSchema;