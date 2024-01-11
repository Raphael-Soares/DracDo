import { useState, useEffect, useMemo } from 'react';

import styled from 'styled-components';

import Header from './components/Header';
import Progressbar from './components/Progressbar';
import Search from './components/Search';
import Form from './components/Form';
import List from './components/List';
import Alert from './components/Alert';

const Background = styled.main`
  background-color: #282a36;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.section`
  background-color: #f8f8f2;
  width: 60dvw;
  height: 90dvh;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 24px;
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [pending, setPending] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [search, setSearch] = useState('');

  function pendingMarked() {
    setPending(true);
    setCompleted(false);
  }

  function completedMarked() {
    setPending(false);
    setCompleted(true);
  }

  function createTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      done: false
    };

    setTasks((tasks) => [...tasks, newTask]);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  function markCompleteTask(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    setTasks(newTasks);
  }

  const pendingTasks = useMemo(() => tasks.filter((task) => !task.done), [tasks]);
  const completedTasks = useMemo(() => tasks.filter((task) => task.done), [tasks]);

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase())),
    [tasks, search]
  );

  const whichTasks = useMemo(
    () => (search.length > 0 ? filteredTasks : pending ? pendingTasks : completedTasks),
    [pending, completed, pendingTasks, completedTasks, filteredTasks, search]
  );

  return (
    <Background>
      <Container>
        <Head>
          <Header />
          <Progressbar tasks={tasks} />

          <Search
            search={search}
            setSearch={setSearch}
            pending={pending}
            completed={completed}
            pendingMarked={pendingMarked}
            completedMarked={completedMarked}
          />
          <Form createTask={createTask} />
        </Head>

        <List tasks={whichTasks} markCompleteTask={markCompleteTask} deleteTask={deleteTask} />

        <Alert
          clearFilters={() => setSearch('')}
          search={search}
          completed={completed}
          completedTasks={completedTasks}
          searchLength={whichTasks.length}
        />
      </Container>
    </Background>
  );
}

export default App;
