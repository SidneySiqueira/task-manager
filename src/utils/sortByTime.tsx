import { TasksProps } from "./type";

export default function sortByTime(tasks: TasksProps[], isMostRecent: boolean) {
    if (!Array.isArray(tasks) || tasks.length === 0) {
      return [];
    }
  
    const sortedTasks = tasks.sort((a, b) => {
      const dateA = new Date(a.time);
      const dateB = new Date(b.time);
      return isMostRecent ? +dateB - +dateA : +dateA - +dateB;
    });
  
    return sortedTasks;
  }