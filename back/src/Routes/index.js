const express = require("express");
const router = express.Router();
const favorite = require("./Characters.Routes");


router.use("/rickandmorty", favorite);

module.exports = router;