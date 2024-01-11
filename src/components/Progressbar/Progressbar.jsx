import React from 'react';
import styled from 'styled-components';

import { useMemo } from 'react';

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

export default function Progressbar({ tasks }) {
  const progress = useMemo(() => {
    const completedTasks = tasks.filter((task) => task.done);
    return (completedTasks.length / tasks.length) * 100;
  }, [tasks]);

  return (
    <Parent>
      <Child style={{ width: `${progress}%` }} />
    </Parent>
  );
}
