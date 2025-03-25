import { TaskProps } from '../types/types'

function Task({ name, state, id, onCheck }: TaskProps): JSX.Element {
  return (
    <li className={`task-item ${state === 'completed' ? 'completed' : ''}`}>
      <div className="view">
        <input
          id={`task-${id}`}
          className="toggle"
          type="checkbox"
          onChange={(e) => onCheck(id, e.target.checked)}
          checked={state === 'completed'}
        />
        <label htmlFor={`task-${id}`}>
          <span className="description">{name}</span>
        </label>
      </div>
    </li>
  )
}

export default Task
