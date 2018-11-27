
const Joi = require('joi');
const mongoose= require('mongoose');

const storeSchema = new mongoose.Schema({
    s_id : Number,
    sname : String,
    saddress : String,
    snumber : String,
    sgender : String,
    star : String,
    open : String,
    close : String,
    introduction : String,
    memo : String,
    sprice : String,
    pictures : String,
    map : String,
    c_id : Number,
    ut_id : Number,
    r_id : Number,
    t_id : Number,
});

const Store = mongoose.model('Store', storeSchema);

//
function validateStore(){

    // const schema={
    //     name: Joi.string().min(3).max(50).required()
    // }
    // return Joi.validate(genre, schema);
}

exports.Store = Store;
exports.validate = validateStore;
module.exports.storeSchema = storeSchema;