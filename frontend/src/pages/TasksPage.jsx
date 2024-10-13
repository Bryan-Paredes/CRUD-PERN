import { useEffect } from "react";
import TaskCard from "../components/tasks/TaskCard";
import { useTask } from "../context/TaskContext";
import { Link } from "react-router-dom";

export default function TasksPage() {
  const { tasks, loadTasks } = useTask();

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (tasks.length === 0)
    return (
      <div className="flex h-[60vh] justify-center items-center flex-col">
        <h1 className="text-3xl font-bold my-4 uppercase">No tienes tareas!</h1>
        <Link
          to="/tasks/new"
          className="bg-blue-700 hover:bg-blue-500 text-white px-3 py-2 rounded-md transition-all duration-300 ease-in-out"
        >
          Crear Tarea
        </Link>
      </div>
    );

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4" key={tasks}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
