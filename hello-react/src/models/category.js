
const Joi = require('joi');
const mongoose= require('mongoose');

const categorySchema = new mongoose.Schema({
    c_id: Number,
    cname: String
});

const Category = mongoose.model('Category', categorySchema);

//카테고리가 비었는지 확인
function validateCategory(){

    // const schema={
    //     name: Joi.string().min(3).max(50).required()
    // }
    // return Joi.validate(genre, schema);
}

exports.Category = Category;
exports.validate = validateCategory;
module.exports.categorySchema = categorySchema;