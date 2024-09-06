import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    //id, text, done
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
  };

  const deleteTask = (taskId) => {
    let tasksNaoRemovidas = tasks.filter((task) => task.id !== taskId)
    setTasks(tasksNaoRemovidas)
  }

  return (
    <>
     <h1>Lista de tarefas</h1>

     <TaskInput onAddTask={addTask}/>
     
     <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
    </>
  )
}

export default App
