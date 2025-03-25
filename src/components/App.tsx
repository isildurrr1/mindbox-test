import { useState } from 'react'

import { FilterType, ITask } from '../types/types'

import Footer from './Footer'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'

function App(): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [filter, setFilter] = useState<FilterType | undefined>('all')

  const onFilterSelect = (newState: FilterType) => {
    setFilter(newState)
  }

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.state !== 'completed'))
  }

  const addTask = (taskName: string) => {
    setTasks((prevTasks) => {
      const newTask: ITask = {
        name: taskName,
        state: undefined,
        id: Math.floor(Math.random() * 1000).toString(),
      }
      return [...prevTasks, newTask]
    })
  }

  const completeItem = (id: string, checked: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, state: checked ? 'completed' : undefined } : task))
    )
  }

  return (
    <div className="todoapp">
      <header>
        <h1>todos</h1>
        <NewTaskForm onSubmit={addTask} />
      </header>
      <section className="main">
        <TaskList data={tasks} filterState={filter} onCheck={completeItem} />
        <Footer filterState={filter} tasksState={tasks} onSelect={onFilterSelect} onClearClick={clearCompleted} />
      </section>
    </div>
  )
}

export default App
