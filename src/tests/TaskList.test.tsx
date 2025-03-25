import { render, screen } from '@testing-library/react'

import TaskList from '../components/TaskList'
import { ITask } from '../types/types'

describe('TaskList Component', () => {
  test('renders tasks based on filter', () => {
    const tasks: ITask[] = [
      { id: '1', name: 'Task 1', state: undefined },
      { id: '2', name: 'Task 2', state: 'completed' },
    ]

    render(<TaskList data={tasks} filterState="active" onCheck={jest.fn()} />)
    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument()
  })
})
