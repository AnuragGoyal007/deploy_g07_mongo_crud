const {student} = require("../models/studentModel");

// CRUD Application
// Create Student

const createStudent=async(req,res)=>{
    try{
        // req.body = {"rollno":101, "name":"Aman", "email":"aman@gmail.com"}    
        const std = await student.create(req.body);
        res.send({
            "message":"Student saved successfully",
            "student":std
        })
    }catch(error){
        console.log(error);
    }
}

// Read all students
// SELECT * FROM students
// student.find() => read students
const getStudent = async(req,res)=>{
    try{
        const data = await student.find();
        res.send({
            "message":"Students fetched successfully",
            data
        })
    }catch(error){
        res.send(error);
    }
}

// We will fetch single student using ID
// SELCT id from student where id=101
// student.findById() => read single student
const getSingleStudent = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await student.findById(id);
        res.send({
            "message":"Student fetched successfully",
            data
        })
    }catch(error){
        res.send(error);
    }
}

// Delete single student
const deleteStudent = async(req, res)=>{
    try{
        const id = req.params.id;
        const data = await student.findByIdAndDelete(id);
        res.send({
            "message": "Student data deleted successfully",
            data
        })
    }catch(error){
        res.send(error);
    }
}

const updateStudent = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await student.findByIdAndUpdate(id, req.body, {new:true});
        res.send({
            "message":"Student data updated successfully",
            data
        })
    }catch(error){
        res.send(error);
    }
}

module.exports = {createStudent, getStudent, getSingleStudent, deleteStudent, updateStudent};