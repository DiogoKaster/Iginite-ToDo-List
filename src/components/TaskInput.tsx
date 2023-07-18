import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskInput.module.css'

export function TaskInput() {
  return (
    <div className={styles.taskContainer}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle size={24} />
        </button>
      </form>
    </div>
  )
}