import { createContext, useContext } from "react";

export const TasksContext = createContext();

export const useTasks = () => {
  return useContext(TasksContext);
};
