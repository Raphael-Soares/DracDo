import React from "react";
import Task from "../components/Task";

function List({ tasks, markCompleteTask, deleteTask }) {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    markCompleteTask={markCompleteTask}
                    deleteTask={deleteTask}
                />
            ))}
        </>
    );
}

export default List;
