import React from "react";
import styled from "styled-components";

import {useContext, useMemo} from "react";
import {TasksContext} from "../contexts/Tasks";

const Parent = styled.div`
    width: 100%;
    height: 24px;
    background-color: #6273a465;
    border-radius: 4px;
`;

const Child = styled.div`
    width: 0%;
    height: 100%;
    background-color: #50fa7b;
    border-radius: 4px;
    transition: width 0.5s ease;
`;

function ProgressBar() {
    const {tasks} = useContext(TasksContext);

    const progress = useMemo(() => {
        const completedTasks = tasks.filter((task) => task.completed);
        return (completedTasks.length / tasks.length) * 100;
    }, [tasks]);

    return (
        <Parent>
            <Child style={{width: `${progress}%`}} />
        </Parent>
    );
}

export default ProgressBar;
