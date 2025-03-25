import { render, screen } from '@testing-library/react'

import Footer from '../components/Footer'
import { ITask } from '../types/types'

describe('Footer Component', () => {
  test('renders footer correctly', () => {
    render(<Footer filterState="all" tasksState={[]} onSelect={jest.fn()} onClearClick={jest.fn()} />)
    expect(screen.getByText(/items left/i)).toBeInTheDocument()
  })
  test('displays the correct number of active tasks', () => {
    const tasks: ITask[] = [
      { id: '1', name: 'Active Task 1', state: undefined },
      { id: '2', name: 'Completed Task 1', state: 'completed' },
      { id: '3', name: 'Active Task 2', state: undefined },
    ]

    render(<Footer filterState="all" tasksState={tasks} onSelect={jest.fn()} onClearClick={jest.fn()} />)

    expect(screen.getByText('2 items left')).toBeInTheDocument()
  })
})
