import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header.tsx'
import { Task } from './components/Task.tsx'
import { TaskInput } from './components/TaskInput.tsx'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: 'Estudar React',
      checked: false,
    },
  ])

  const checkedTasks = tasks.filter((task) => task.checked)

  function handleCheckboxClick(id: number) {
    const taskIndex = tasks.findIndex((task) => task.id === id)

    const newTasks = [...tasks]

    newTasks[taskIndex].checked = !newTasks[taskIndex].checked

    setTasks(newTasks)
  }

  function createTask(task: string) {
    const newTask = {
      id: Math.random(),
      content: task,
      checked: false,
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <Header />

      <div className={styles.mainContainer}>
        <TaskInput createTask={createTask} />

        <main className={styles.taskListContainer}>
          <header className={styles.taskHeader}>
            <div>
              <p>Tarefas Criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>
                {checkedTasks.length} de {tasks.length}
              </span>
            </div>
          </header>
          <div className={styles.taskContent}>
            <ul>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    checked={task.checked}
                    content={task.content}
                    handleChangeCheckedTasks={handleCheckboxClick}
                    deleteTask={deleteTask}
                  />
                )
              })}
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
