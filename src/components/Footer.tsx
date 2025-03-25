import { FooterProps } from '../types/types'

import TaskFilter from './TaskFilter'

function Footer({ filterState = 'all', tasksState = [], onSelect, onClearClick }: FooterProps): JSX.Element {
  const activeTasksCount = tasksState.filter((task) => task.state !== 'completed').length

  const handleSelect = (filter: 'all' | 'active' | 'completed') => {
    if (onSelect) {
      onSelect(filter)
    }
  }

  return (
    <footer className="footer">
      <span className="todo-count">{`${activeTasksCount} items left`}</span>
      <TaskFilter filterState={filterState} onSelect={handleSelect} />
      <button type="button" className="clear-completed" onClick={onClearClick}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
