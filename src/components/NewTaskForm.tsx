import React, { useState } from 'react'

import { NewTaskFormProps } from '../types/types'

function NewTaskForm({ onSubmit = () => {} }: NewTaskFormProps): JSX.Element {
  const [taskName, setTaskName] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (taskName.trim() !== '') {
      onSubmit(taskName)
      setTaskName('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="add-button" aria-label="Add task" />
      <input className="new-todo" placeholder="What needs to be done?" value={taskName} onChange={handleInputChange} />
    </form>
  )
}

export default NewTaskForm
