import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import uncheckedImg from '../assets/unchecked.svg'
import checkedImg from '../assets/checked.svg'
import { useState } from 'react'

interface TaskProps {
  id: number
  content: string
  deleteTask: (id: number) => void
  handleChangeCheckedTasks: (id: number) => void
  checked: boolean
}

export function Task({
  id,
  content,
  deleteTask,
  handleChangeCheckedTasks,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleCommentDelete() {
    deleteTask(id)
  }

  function handleCheckboxClick() {
    setIsChecked(!isChecked)
    handleChangeCheckedTasks(id)
  }

  return (
    <li className={styles.taskItemContainer}>
      <div>
        <aside>
          <img
            className={isChecked ? styles.checked : ''}
            onClick={handleCheckboxClick}
            src={isChecked ? checkedImg : uncheckedImg}
            alt=""
          />
          <p className={isChecked ? styles.checked : ''}>{content}</p>
        </aside>
        <button onClick={handleCommentDelete}>
          <Trash size={24} />
        </button>
      </div>
    </li>
  )
}
