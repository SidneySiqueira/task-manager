export interface TasksProps {
    id: string;
    name: string;
    description: string;
    time: Date,
    concluded: boolean,
}

export interface TaskStateProps {
    selectedTask:
      | {
        id: string;
        name: string;
        description: string;
        time: Date,
        concluded: boolean,
        }
      | [];
  }