
const Joi = require('joi');
const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    u_id: String,
    pwd: String,
    name: String,
    gender: String,
    ut_id: Number
});

const User = mongoose.model('User', userSchema);

//이메일 중복
//패스워드 확인
//패스워드 영문조합 할건지에 따라서(8자 이상만)
function validateUser(){

    // const schema={
    //     name: Joi.string().min(3).max(50).required()
    // }
    // return Joi.validate(genre, schema);
}

exports.User = User;
exports.validate = validateUser;
module.exports.userSchema = userSchema;