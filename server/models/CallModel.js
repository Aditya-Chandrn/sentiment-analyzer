const {Schema, model} = require("mongoose");

const call = new Schema({
    callId : {
        type: String,
        unique:true,
        required: true
    },
    empId : {
        type: String,
        ref: "EmployeeData",
        required: true
    },
    customerPhone: {
        type: Number,
        require: true
    },
});

const analyzeCall = new Schema({
    callId : {
        type: String,
        ref: "CallAnalysis",
        unique: true,
        required: true
    },
    empAnalysis: {
        type: [Number],
        required: true
    },
    customerAnalysis : {
        type: [Number],
        required: true
    }
})

const callRecord = model("CallRecord", call);
const callAnalysis = model("CallAnalysis", analyzeCall);

module.exports = {callRecord, callAnalysis};