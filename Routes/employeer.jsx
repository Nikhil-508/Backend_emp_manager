const express = require('express')
const EmployeeModel = require('../Models/employee')

const router = express.Router()


router.post('/create-employee',(req,res)=>{
    console.log(req.body,"poiiiii");
    const {Fname,Lname,Dept,Designation,JoinDate,Salary} = req.body;
    EmployeeModel.create({
        Fname:Fname,
        Lname:Lname,
        Dept:Dept,
        Designation:Designation,
        JoinDate:JoinDate,
        Salary:Salary
    }).then((result)=>{
        console.log(result,"emp data")
        return res.json(result)
}).catch(err => console.log(err))
})


router.get('/employees',(req,res)=>{
    EmployeeModel.find().then(employee=>{
        return res.json(employee)
    }).catch(err => res.json(err))
 })


router.post('/delete-emp',(req,res)=>{
    const id = req.params.id
    EmployeeModel.findByIdAndDelete(id)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>console.log(err))
})