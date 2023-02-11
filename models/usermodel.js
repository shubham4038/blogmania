const mongoose = require('mongoose');
const validator = require('validator');
const brcypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: [8 , 'Minimum length should be 8']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate : [validator.isEmail , "Please enter valid email address"],
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength:[9, "Minimum length of password should be 8"],
        select:false

    },
    passwordConfirm:{
        type:String,
        required:true,
        validate : {
            validator : function(el) {
                return el === this.password;
            },
            message : "Password is not same "

        }
    },
    city:{
        type:String,
    },
    contact:{
        type:Number,
        required:true,
        length :[10, "Phone number should have length equals to 10"]
    }
})
userSchema.pre('save', async function(next){  
    if(!this.isModified('password')) return next();
    
    this.password= await brcypt.hash(this.password,12);

    this.passwordConfirm = undefined;
    next();

})

userSchema.methods.checkPassword = function(candidatePassword,userPassword){
    return candidatePassword === userPassword;
}

const User  = mongoose.model("User",userSchema);

module.exports = User;