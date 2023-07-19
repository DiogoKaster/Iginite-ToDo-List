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
    },
  ])

  function createTask(task: string) {
    const newTask = {
      id: Math.random(),
      content: task,
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
              <span>2 de {tasks.length}</span>
            </div>
          </header>
          <div className={styles.taskContent}>
            <ul>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    content={task.content}
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
