import { render, screen, fireEvent } from '@testing-library/react'

import NewTaskForm from '../components/NewTaskForm'

describe('NewTaskForm Component', () => {
  test('calls onSubmit when form is submitted', () => {
    const mockSubmit = jest.fn()
    render(<NewTaskForm onSubmit={mockSubmit} />)
    const input = screen.getByPlaceholderText(/what needs to be done?/i)

    fireEvent.change(input, { target: { value: 'Test Task' } })
    fireEvent.submit(input)

    expect(mockSubmit).toHaveBeenCalledWith('Test Task')
  })
})
