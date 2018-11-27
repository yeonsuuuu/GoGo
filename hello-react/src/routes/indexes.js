//schema 가져오기
const {User, validate} = require('../models/users');
// const {Review, validate} = require('../models/review');

const express= require('express');
const router = express.Router();


/******등록 *****/
    
    // user
    router.post('/gogo/user', async (req, res )=> {
        // const error = validate(req.body).error;
        //변수명이 같으면 이렇게 사용 가능
        console.log("hi");
        // const {error} = validate(req.body);
        // if(error) return res.status(400).send(error.message);

        let user = new User({u_id: req.body.u_id , pwd : req.body.pwd, name : req.body.name, gender: req.body.gender});
        user= await user.save();

        console.log(user);
        res.send(user);
    })

//     // review
//     router.post('/gogo/review', async (req, res )=> {
//         // const error = validate(req.body).error;
//         //변수명이 같으면 이렇게 사용 가능
//         const {error} = validate(req.body);
//         if(error) return res.status(400).send(error.message);

//         let review = new Review({ content: req.body.content, w_id: req.body.w_id, ut_id: req.body.ut_id});
//         review= await review.save();

//         res.send(review);
//     })

// /***** 조회 *****/

//     // user
//     router.get('/gogo/user/:u_id', async (req, res )=> {
//         const guser = await User.findById(req.params.u_id);
//         if(!guser) return res.status(404).send('The genres with the givne id was not found');
//         res.send(guser);
//     })

//     // review
//     router.get('/gogo/review/:r_id', async (req, res )=> {
//         const greview = await Review.findById(req.params.r_id);
//         if(!greview) return res.status(404).send('The genres with the givne id was not found');
//         res.send(greview);
//     })

//      // store
//      router.get('/gogo/store/:s_id', async (req, res )=> {
//         const store = await Store.findById(req.params.s_id);
//         if(!store) return res.status(404).send('The genres with the givne id was not found');
//         res.send(store);
//     })


//     // tags
//     router.get('/gogo/tags/:t_id', async (req, res )=> {
//         const tags = await Tags.findById(req.params.t_id);
//         if(!tags) return res.status(404).send('The genres with the givne id was not found');
//         res.send(tags);
//     })

//     // water_info
//     router.get('/gogo/water_info/:w_id', async (req, res )=> {
//         const water_info = await Water_info.findById(req.params.w_id);
//         if(!water_info) return res.status(404).send('The genres with the givne id was not found');
//         res.send(water_info);
//     })


//     // category
//     router.get('/gogo/category/:c_id', async (req, res )=> {
//         const category = await Category.findById(req.params.c_id);
//         if(!category) return res.status(404).send('The genres with the givne id was not found');
//         res.send(category);
//     })

//     // utype
//     router.get('/gogo/utype/:ut_id', async (req, res )=> {
//         const utype = await Utype.findById(req.params.ut_id);
//         if(!utype) return res.status(404).send('The genres with the givne id was not found');
//         res.send(utype);
//     })



// /******수정 *****/

//     // review 
//     router.patch('/gogo/review/:r_id', async (req, res)=>{
//         const {error} = validate(req.body);
//         if(error) return res.status(404).send(error.message);

//         const ureview = await Review.findByIdAndUpdate(req.params.r_id,{
//             content: req.body.content
//         }, {new : true})

//         res.send(ureview);
//     })

    


// /***** 삭제 *****/

//     // review 
//     router.delete('/gogo/review/:r_id', async (req, res)=>{
//         const dreview = await Review.findByIdAndDelete(req.params.r_id);

//         if(!dreview) return res.status(404).send(error.message);

//         res.send(dreview);
//     })


    module.exports = router;
