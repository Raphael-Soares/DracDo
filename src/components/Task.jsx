import styled from "styled-components";
import { AiFillMinusCircle, AiFillCheckCircle } from "react-icons/ai";

const ButtonGroup = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.2s ease;
`;

const TaskItem = styled.div`
    width: 100%;
    height: 50px;
    background-color: #f4f4f4;
    border: solid 1px #dbdbdb;
    border-radius: 4px;
    padding-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #848484;
    transition: 0.2s linear;

    &:hover {
        background-color: #ffffff;
        transition: 0.2s ease;

        ${ButtonGroup} {
            transform: translateX(0%);
            opacity: 1;
        }
    }
`;

const TaskTitle = styled.p`
    font-size: 1em;
    max-width: 70%;
    overflow: hidden;
`;

const Button = styled.button`
    width: 40px;
    height: 100%;
    border: none;
    cursor: pointer;
    margin-left: auto;
    font-size: 24px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DeleteButton = styled(Button)`
    background: #ff5555;
`;

const AddButton = styled(Button)`
    background: #50fa7b;
`;

function Task({ task, deleteTask, markCompleteTask }) {
    return (
        <TaskItem>
            <TaskTitle>{task.title}</TaskTitle>

            <ButtonGroup>
                <DeleteButton onClick={() => deleteTask(task.id)}>
                    <AiFillMinusCircle />
                </DeleteButton>
                <AddButton onClick={() => markCompleteTask(task.id)}>
                    <AiFillCheckCircle />
                </AddButton>
            </ButtonGroup>
        </TaskItem>
    );
}

export default Task;
