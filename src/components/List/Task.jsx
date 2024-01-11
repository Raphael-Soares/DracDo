import styled from 'styled-components';
import { AiFillMinusCircle, AiFillCheckCircle } from 'react-icons/ai';

const ButtonGroup = styled.div`
  height: 100%;
  width: 0px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  transition: all 300ms ease-in-out;
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
  transition: 300ms linear;

  &:hover {
    background-color: #ffffff;
    transition: 300ms ease;

    ${ButtonGroup} {
      width: 100px;
    }
  }
`;

const TaskTitle = styled.p`
  font-size: 1em;
  max-width: 70%;
  overflow: hidden;
`;

const Button = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  cursor: pointer;
  margin-left: auto;
  font-size: 24px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

function Task({ task, deleteTask, markCompleteTask }) {
  return (
    <TaskItem>
      <TaskTitle>{task.title}</TaskTitle>

      <ButtonGroup>
        <Button style={{ background: '#ff5555' }} onClick={() => deleteTask(task.id)}>
          <AiFillMinusCircle />
        </Button>
        <Button style={{ background: '#50fa7b' }} onClick={() => markCompleteTask(task.id)}>
          <AiFillCheckCircle />
        </Button>
      </ButtonGroup>
    </TaskItem>
  );
}

export default Task;
