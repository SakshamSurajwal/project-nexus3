const express=require('express');
const User = require('./userModel');
const Feed = require('./FeedModel');

const router=express.Router();

const giveFeedback= async (req,res)=>{
    const { name, email, mobile,web_ser_rat,cus_ser_rat,bus_rat,sugg } = req.body;

    if (!name || !email || !mobile) {
        res.status(400);
    }
    else{
    const userExists = await Feed.findOne({ email });

    if (userExists) {
        res.status(400).json({message:'User exits'});
    }else{
    const user = await Feed.create({
        name, email, mobile,web_ser_rat,cus_ser_rat,bus_rat,sugg
    });
    
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            web_ser_rat:user.web_ser_rat,
            cus_ser_rat: user.cur_ser_rat,
            bus_rat: user.bus_rat,
            sugg: user.sugg
        });
    } else {
        res.status(400);
    }
}
}
}

const createUser= async (req,res)=>{
    const { name, email, mobile} = req.body;

    if (!name || !email || !mobile) {
        res.status(400);
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({message:'User exits'});
    }else{
    const user = await User.create({
        name, email, mobile
    });
    
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile
        });
    } else {
        res.status(400);
    }
}
}

router.route('/').post(createUser);
router.route('/feedback').post(giveFeedback);

module.exports=router;