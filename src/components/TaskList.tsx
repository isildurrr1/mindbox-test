import { TaskListProps } from '../types/types'

import Task from './Task'

function TaskList({ data = [], filterState = 'all', onCheck }: TaskListProps): JSX.Element {
  const filteredData = data.filter((task) => {
    if (filterState === 'active') {
      return task.state === undefined
    }
    if (filterState === 'completed') {
      return task.state === 'completed'
    }
    return true
  })

  return (
    <ul className="todo-list">
      {filteredData.map((task) => (
        <Task key={task.id} id={task.id} name={task.name} state={task.state} onCheck={onCheck} />
      ))}
    </ul>
  )
}

export default TaskList
