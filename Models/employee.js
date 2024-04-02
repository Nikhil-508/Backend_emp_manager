const mongoose = require('mongoose')

EmployeeSchema = new mongoose.Schema({

    Fname: {
        type: String,
        required:true
    },
    Lname:{
        type :String ,
        required:true
    },
    Dept:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    JoinDate:{
        type:Date,
    },
    Salary:{
        type:Number
    },
    imageUrl:{
        type: String,

    }
})

const EmployeeModel = mongoose.model('empSample', EmployeeSchema)
module.exports = EmployeeModel
