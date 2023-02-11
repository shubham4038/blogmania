const User = require('../models/usermodel');

exports.getAlluser = async(req,res)=>{
    try{
        const users = await User.find();
        if(users.length >0){
            res.status(200).json({
                status:"Success",
                result:users.length,
                data:{
                    users
                }
            })
        }
        return res.status(400).json({
            status:"Failed",
            message:"No users found"
        })
        
    }catch(err){
        res.status(400).json({
            status:"Failed",
            message:"Invalid request"
        })
    }
    
}