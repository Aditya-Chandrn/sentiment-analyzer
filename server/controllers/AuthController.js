const bcrypt = require("bcryptjs");
const {adminData} = require("../models/AnalyticModels");

const Auth = async (req,res,next) => {
    try{
        const {adminId, password} = req.body;
        if(!adminId || !password) res.json({message : "All field required"});

        const admin = await adminData.findOne({adminId});
        if(!admin) res.json({message : "Incorrect ID"});

        const correctPassword = await bcrypt.compare(password, admin.password);
        if(!correctPassword) res.json({message : "Incorrect Password"});

        res.status(201).json({message : "Logged in successfully", success: true, isLogged:true});
        // next();
    } catch(error) {
        console.error('Error : ',error.message);
    }
}

module.exports = Auth;