export type FilterType = 'all' | 'active' | 'completed'

export interface ITask {
  id: string
  name: string
  state?: 'completed' | undefined
}

export interface FooterProps {
  filterState?: FilterType
  tasksState?: ITask[]
  onSelect?: (filter: FilterType) => void
  onClearClick?: () => void
}

export interface TaskListProps {
  data?: ITask[]
  filterState?: FilterType
  onCheck: (id: string, checked: boolean) => void
}

export interface TaskProps {
  name: string
  state?: 'completed' | 'active'
  id: string
  onCheck: (id: string, checked: boolean) => void
}

export interface NewTaskFormProps {
  onSubmit?: (taskName: string) => void
}

export interface TaskFilterProps {
  filterState?: FilterType
  onSelect: (filter: FilterType) => void
}
