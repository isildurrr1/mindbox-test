import { TaskFilterProps } from '../types/types'

function TaskFilter({ filterState = 'all', onSelect }: TaskFilterProps): JSX.Element {
  return (
    <ul className="filters">
      <li>
        <button type="button" className={filterState === 'all' ? 'selected' : ''} onClick={() => onSelect('all')}>
          All
        </button>
      </li>
      <li>
        <button type="button" className={filterState === 'active' ? 'selected' : ''} onClick={() => onSelect('active')}>
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          className={filterState === 'completed' ? 'selected' : ''}
          onClick={() => onSelect('completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TaskFilter
