const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");

const employee = new Schema({
    empId : {
        type: String,
        unique: true,
        required: true
    },
    empName : {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now()
    }
});

const admin = new Schema({
    adminId: {
        type: String,
        ref: "EmployeeData",
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

admin.pre("save", async function () {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password,salt);
});

const employeeData = model("EmployeeData", employee);
const adminData = model ("AdminData", admin);

module.exports = {employeeData, adminData};



