import { useTask } from "../../context/TaskContext";
import { Button, Card } from "../ui";
import { useNavigate } from "react-router-dom";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

export default function TaskCard({ task }) {
  const { deleteTask } = useTask();
  const navigate = useNavigate();

  return (
    <Card className="px-7 py-3 flex flex-col gap-y-2 justify-center">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button
          className={
            "bg-green-900 hover:bg-green-600 transition-all duration-150"
          }
          onClick={() => navigate(`/tasks/${task.id}/edit`)}
        >
          <MdEdit className="text-white" />
          Editar
        </Button>
        <Button
          className={"bg-red-950 hover:bg-red-600 transition-all duration-150"}
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar esta tarea?")) {
              deleteTask(task.id);
            }
          }}
        >
          <IoTrashBinSharp className="text-white" />
          Eliminar
        </Button>
      </div>
    </Card>
  );
}
