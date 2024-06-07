const mongoose=require('mongoose');

const feedSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type: Number,
        required: true
    },
    web_ser_rat:{
        type: Number,
        min:0,
        max:10
    },
    cus_ser_rat:{
        type: Number,
        min:0,
        max:10
    },
    bus_rat:{
        type: Number,
        min:0,
        max:10
    },
    sugg: String
},{
    timestamps: true
});

const Feed=mongoose.model(`Feed`,feedSchema);
module.exports=Feed;
