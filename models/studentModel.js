const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    email:{type:String,
        required:true
    },
    age:{
        type:Number
    }
})

const student = mongoose.model("Student", studentSchema)
module.exports = {student}

// Database // collection (Table)