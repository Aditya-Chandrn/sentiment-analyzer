const express = require("express");
const router = express.Router();

const {adminData} = require("../models/AnalyticModels");
const Auth = require("../controllers/AuthController");

router.post("/login", Auth);

module.exports = router;