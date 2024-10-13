import { useNavigate, useParams } from "react-router-dom";
import { Card, Input, Label, Textarea, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import { IoCreate } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";

export default function TaskFromPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const { createTask, loadTask, errors: taskErrors, updateTask } = useTask();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    let task;
    if (!params.id) {
      task = await createTask(data);
    } else {
      task = await updateTask(params.id, data);
    }
    if (task) {
      navigate("/tasks");
    }
  });

  useEffect(() => {
    if (params.id) {
      loadTask(params.id).then((task) => {
        setValue("title", task.title);
        setValue("description", task.description);
      });
    }
  }, [setValue, params.id, loadTask]);

  return (
    <div className="flex h-[60vh] justify-center items-center">
      <Card>
        {taskErrors?.map((error) => (
          <p key={error} className="text-red-500 text-sm text-center">
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Editar Tarea" : "Crear Tarea"}
        </h2>
        <form onSubmit={onSubmit}>
          <Label>Title</Label>
          <Input
            type="text"
            placeholder="Titulo"
            autoFocus
            {...register("title", {
              required: {
                value: true,
                message: "Titulo es requerido",
              },
              minLength: {
                value: 5,
                message: "Titulo debe tener al menos 5 caracteres",
              },
            })}
          />
          <span className="text-red-500 text-sm">{errors.title?.message}</span>
          <Label>Description</Label>
          <Textarea
            placeholder="Description"
            roes={3}
            {...register("description", {
              required: {
                value: true,
                message: "Descrición es requerida",
              },
              minLength: {
                value: 3,
                message: "Descripción debe tener al menos 3 caracteres",
              },
            })}
          />
          <span className="text-red-500 text-sm">
            {errors.description?.message}
          </span>
          <br />
          <Button type="submit">
            {params.id ? (
              <GrUpdate className="text-white" />
            ) : (
              <IoCreate className="text-white" />
            )}
            {params.id ? "Editar" : "Crear"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
