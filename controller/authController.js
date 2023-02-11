const User = require('../models/usermodel');

exports.signup = async(req,res)=>{
    try{
        const {email} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(201).json({
                status:"failed",
                message:"email already exist"
                
            })
        }
        const newUser = await User.create(req.body);
        res.status(201).json({
            status:"success",
            data:{
                newUser
            
        }})
    }
    catch(err){
        res.status(404).json({
            status:"failed",
            message:err
            
        })
    }
    
}
exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(404).json({
                status: "Failed",
                message:"Please enter email or password"
                
            })
        }
        console.log(password);
        const user = await User.findOne({email}).select('+password')
        if(!user || !user.checkPassword(password,user.password)){
            return res.status(404).json({
                status: "Failed",
                message:"User doesn't exist"
        })
        }
        res.status(404).json({
            status: "Success",
            data:{
                user
            },
            message:"user logged in"})
        }
        catch(err){
            res.status(404).json({
                status: "Failed",
                message:"There is some error"})
            }
        }
