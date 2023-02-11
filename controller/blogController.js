const Blogs = require('../models/blogmodel');

exports.getAllblogs = async (req,res) =>{
    try{
        const blogs = await Blogs.find();
        if(blogs.length > 0){
            return res.status(201).json({
                status:"success",
                data:{
                    blogs
                
            }})
        }
        return res.status(201).json({
            status:"Failed",
            message:"No blogs found"
            })
    }catch(err){
        return res.status(201).json({
            status:"Failed",
            message:"Invalid request"
        })
    }
}

exports.addBlogs = async(req,res) =>{
    try{
        const addblog = await Blogs.create(req.body)
        res.status(201).json({
            status: "Success",
            data:{
                addblog
            }

        })
    }catch(err){
        return res.status(404).json({
            status:"Failed",
            message:err
        })
    }
}