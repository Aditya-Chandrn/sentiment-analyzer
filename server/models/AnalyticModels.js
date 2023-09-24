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
    empType : {
        type: Number,
        required: true
    },
    empImage: {
        type: Buffer
    },
    createdAt : {
        type: Date,
        default: Date.now()
    }
});

const product = new Schema({
    productId : {
        type: String,
        unique: true,
        required: true
    },
    productName : {
        type: String,
        required: true
    },
    productImage: {
        type: Buffer
    },
    createdAt : {
        type: Date,
        default: Date.now()
    }
});


admin.pre("save", async function () {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password,salt);
});

const employeeData = model("EmployeeData", employee);
const productData = model ("ProductData", product);

module.exports = {employeeData,productData};



