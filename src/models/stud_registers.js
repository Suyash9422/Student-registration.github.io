const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    class:{
        type:String,
        
    },
    rollno:{
        type:Number,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    pass:{
        type:String
    }
    
})

//now we need to create collection
const Register = new mongoose.model("Register",studentSchema);
module.exports = Register;