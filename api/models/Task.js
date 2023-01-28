const mongoose = require("mongoose");
const Task = mongoose.model("Task", {
    Title: String,
    Description: String,
    Done: Boolean,
    Due_date: Date,
    Due_time: String,
});
module.exports = Task;
