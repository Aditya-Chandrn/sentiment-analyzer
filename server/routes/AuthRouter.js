const express = require("express");
const router = express.Router();

const {adminData} = require("../models/EmployeeModel");
const Auth = require("../controllers/AuthController");

router.post("/login", Auth);

module.exports = router;