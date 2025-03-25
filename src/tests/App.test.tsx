import { render, screen, fireEvent } from '@testing-library/react'

import App from '../components/App'

describe('App Component', () => {
  test('renders the App component', () => {
    render(<App />)
    expect(screen.getByText(/todos/i)).toBeInTheDocument()
  })

  test('adds a new task', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('What needs to be done?')
    const button = screen.getByLabelText('Add task')
    fireEvent.change(input, { target: { value: 'New Task' } })
    fireEvent.click(button)
    expect(screen.getByText('New Task')).toBeInTheDocument()
  })

  test('filters tasks correctly when selecting filter in Footer', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('What needs to be done?')
    fireEvent.change(input, { target: { value: 'Active Task' } })
    fireEvent.click(screen.getByLabelText('Add task'))

    fireEvent.change(input, { target: { value: 'Completed Task' } })
    fireEvent.click(screen.getByLabelText('Add task'))

    expect(screen.getByText('Active Task')).toBeInTheDocument()
    expect(screen.getByText('Completed Task')).toBeInTheDocument()

    const completedTaskCheckbox = screen.getAllByRole('checkbox')[1]
    fireEvent.click(completedTaskCheckbox)

    const activeFilterButton = screen.getByText('Active')
    fireEvent.click(activeFilterButton)

    expect(screen.getByText('Active Task')).toBeInTheDocument()
    expect(screen.queryByText('Completed Task')).not.toBeInTheDocument()

    const completedFilterButton = screen.getByText('Completed')
    fireEvent.click(completedFilterButton)
    expect(screen.getByText('Completed Task')).toBeInTheDocument()
    expect(screen.queryByText('Active Task')).not.toBeInTheDocument()
  })
})
