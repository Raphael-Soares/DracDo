const api = require("express").Router();
const Task = require("../models/Task");

api.get("/", (req, res) => {
    res.json({message: "Hello api"});
});
