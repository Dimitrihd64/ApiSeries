const mongoose=require('mongoose');
const {Schema}=mongoose;

const serieSchema = new Schema({
    title: {type:String,required:true},
    year: {type:Number,required: true},
    category: [{type:String,required:true,default:null}],
    poster:{type:String,required:true,default:null},
    images: [{type:String,required:true}],
    chapters: {type:Number,required:true},
    synopsis: {type:String,required:true},
    imdb:[{
        email:{type:String,required:false},
        rating:{type:Number, required:true},

    }]
});


module.exports =mongoose.model('Serie',serieSchema,'series2023');
