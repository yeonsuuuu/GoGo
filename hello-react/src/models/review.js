
const Joi = require('joi');
const mongoose= require('mongoose');

const reviewSchema = new mongoose.Schema({
    r_id : Number,
    date : Date,
    content : String,
    w_id : Number,
    ut_id : Number
});

const Review = mongoose.model('Review', reviewSchema);

//content title 비어있는 지만 확인
function validateReview(){

    // const schema={
    //     name: Joi.string().min(3).max(50).required()
    // }
    // return Joi.validate(genre, schema);
}

exports.Review = Review;
exports.validate = validateReview;
module.exports.reviewSchema = reviewSchema;