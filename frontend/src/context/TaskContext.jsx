/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getAllTasksRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks.api";

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);

  const loadTasks = async () => {
    const res = await getAllTasksRequest();
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await deleteTaskRequest(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
      setTasks([...tasks, task]);
      return task;
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  const loadTask = async (id) => {
    const res = await getTaskRequest(id);
    return res.data;
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task);
      setTasks(tasks.map((t) => (t.id === id ? task : t)));
      return task;
    } catch (error) {
      setErrors([error.response.data.message]);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        errors,
        loadTasks,
        deleteTask,
        createTask,
        loadTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
