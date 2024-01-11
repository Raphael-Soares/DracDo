import React from 'react';
import Task from './Task';
import styled from 'styled-components';

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-height: 230px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-right: -12px;
  padding-right: 6px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background: #e4e4e4;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #848484;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #848484;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #848484;
  }
`;

export default function List({ tasks, markCompleteTask, deleteTask }) {
  return (
    <Tasks>
      {tasks.map((task) => (
        <Task key={task.id} task={task} markCompleteTask={markCompleteTask} deleteTask={deleteTask} />
      ))}
    </Tasks>
  );
}
