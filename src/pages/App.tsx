import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/ListComponent';
import Timer from '../components/Timer';
import { ITask } from '../types/ITask';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(currentTasks => currentTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id
    })));
  }

  function completeTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(currentTasks =>
        currentTasks.map(task => {
          if (task.id ===selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task;
        }))
    }
    return null;
  }

  return ( 
      <div className={style.AppStyle}>
        <Form setTasks={setTasks}/>
        <List 
          tasks={tasks}
          selectTask={selectTask}
        />
        <Timer 
          selected={selected}
          completeTask={completeTask}
        />
      </div>
  );
}

export default App;
