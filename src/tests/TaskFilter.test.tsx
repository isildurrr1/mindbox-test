import { render, screen } from '@testing-library/react'

import TaskFilter from '../components/TaskFilter'

describe('TaskFilter Component', () => {
  test('renders filter buttons', () => {
    render(<TaskFilter filterState="all" onSelect={jest.fn()} />)
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Active')).toBeInTheDocument()
    expect(screen.getByText('Completed')).toBeInTheDocument()
  })
})
