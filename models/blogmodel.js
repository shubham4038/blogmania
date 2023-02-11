const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        minlength:[1,"Description must have 50 words"]
    },
    user:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Blogs = mongoose.model("blog",blogSchema);

module.exports=Blogs;