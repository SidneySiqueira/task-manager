export interface TasksProps {
  id: string;
  name: string;
  description: string;
  severity: string;
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

export interface OptionsProps {
  label: string;
  value: string;
}

export interface FormData {
  id: string,
  name: string;
  description: string;
  severity:string;
  time: Date,
  concluded: boolean,
}