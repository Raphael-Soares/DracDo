const express = require("express");
const cors = require("cors");
const app = express();
const {randomUUID} = require("crypto");

const corsOptions = {
    origin: ["http://localhost:5173"],
    optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(express.json());
require("dotenv").config();

const Tasks = require("./db/tasks");

const port = 5050;

app.get("/api/tasks", async (req, res) => {
    const tasks = await Tasks.findAll();
    return res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
    const {title} = req.body;

    const task = await Tasks.create({
        id: randomUUID(),
        title,
        done: false,
    });

    return res.json(task);
});

app.patch("/api/tasks/:id", async (req, res) => {
    const id = req.params.id;

    const task = await Tasks.findOne({where: {id}});
    task.done = true;

    await task.save();
    res.json(task);
});

app.delete("/api/tasks/:id", async (req, res) => {
    const id = req.params.id;
    const task = await Tasks.findOne({where: {id}});
    await task.destroy();
    return res.json("deleted");
});

app.listen(port);
