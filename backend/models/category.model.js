const mongoose=require('mongoose');
const {Schema}=require('mongoose')

const categorySchema = new Schema({
    name:{type:String,required:true},
    image:{type:String,required:true}

});

module.exports =mongoose.model('Category',categorySchema,'categories2023');