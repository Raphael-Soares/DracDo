import {createContext, useState, useEffect} from "react";

import axios from "axios";
const API_URL = "http://localhost:5050";

export const TasksContext = createContext();

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    const [pending, setPending] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(`${API_URL}/api/tasks`)
            .then((res) => {
                setTasks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function pendingMarked() {
        setPending(!pending);
        setCompleted(false);
    }

    function completedMarked() {
        setCompleted(!completed);
        setPending(false);
    }

    function clearFilters() {
        setCompleted(false);
        setPending(false);
        setSearch("");
    }

    async function createTask(title) {
        const newTask = {
            title,
            done: false,
        };

        const res = await axios.post(`${API_URL}/api/tasks`, newTask);
        setTasks([...tasks, res.data]);
    }

    async function deleteTask(id) {
        await axios.delete(`${API_URL}/api/tasks/${id}`);
        setTasks(tasks.filter((task) => task.id !== id));
    }

    async function markCompleteTask(id) {
        await axios.patch(`${API_URL}/api/tasks/${id}`);

        setTasks(tasks.map((task) => (task.id === id ? {...task, done: !task.done} : task)));
    }

    return (
        <TasksContext.Provider
            value={{tasks, pending, completed, search, clearFilters, setSearch, createTask, deleteTask, markCompleteTask, completedMarked, pendingMarked}}
        >
            {children}
        </TasksContext.Provider>
    );
};
