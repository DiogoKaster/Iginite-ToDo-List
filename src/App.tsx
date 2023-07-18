import './global.css'
import { Header } from './components/Header.tsx'
import { TaskInput } from './components/TaskInput.tsx'

function App() {
  return (
    <div>
      <Header />
      <div>
        <TaskInput />
      </div>
    </div>
  )
}

export default App
