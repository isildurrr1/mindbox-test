import { render, screen } from '@testing-library/react'

import Task from '../components/Task'

describe('Task Component', () => {
  test('renders a task', () => {
    render(<Task id="1" name="Sample Task" state={undefined} onCheck={jest.fn()} />)
    expect(screen.getByText('Sample Task')).toBeInTheDocument()
  })
})
