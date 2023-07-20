import { useState } from 'react'
import styles from './TaskInput.module.css'
import { PlusCircle } from '@phosphor-icons/react'

interface taskInputProps {
  createTask: (task: string) => void
}

export function TaskInput({ createTask }: taskInputProps) {
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault()
    createTask(newTask)
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleNewTaskChangeValidity(
    event: React.InvalidEvent<HTMLInputElement>,
  ) {
    event.target.setCustomValidity('Digite pelo menos 1 caractere')
  }

  return (
    <div className={styles.taskInputContainer}>
      <form onSubmit={handleCreateNewTask}>
        <input
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskChangeValidity}
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
        />
        <button type="submit" disabled={newTask.length === 0}>
          Criar <PlusCircle size={24} />
        </button>
      </form>
    </div>
  )
}
