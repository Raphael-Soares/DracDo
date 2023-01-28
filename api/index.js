const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const port = 5173;
const app = express();
mongoose.set("strictQuery", true);
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "hello world"});
});

const apiRoutes = require("./routes/Tasks");

app.use("/api", apiRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Concetando-se ao MongoDB");
        app.listen(port);
    })
    .catch((err) => {
        console.log(err);
    });
