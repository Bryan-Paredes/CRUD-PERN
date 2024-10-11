import { Button, Card, Input } from "../components/ui/index.js";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    // const result = await fetch("http://localhost:3000/api/signup", {
    //   method: "POST",
    //   credentials: "include",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true,
    //   },
    // });
    // const dataSignup = await result.json();
    // console.log(dataSignup);
    const res = await axios.post("http://localhost:3000/api/signup", data, {
      withCredentials: true,
    });
    console.log(res);
  });
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-3xl font-bold">Register</h3>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Enter your name"
            {...register("name", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength: {
                value: 3,
                message: "This field must be 3 characters or more",
              },
              maxLength: {
                value: 10,
                message: "This field must be 10 characters or less",
              },
            })}
          />
          <span className="text-red-500 text-sm">
            {errors.name?.type ? errors.name.message : null}
          </span>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          <span className="text-red-500 text-sm">
            {errors.email?.type ? errors.email.message : null}
          </span>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          <span className="text-red-500 text-sm">
            {errors.password?.type ? errors.password.message : null}
          </span>

          <Button>Register</Button>
        </form>
      </Card>
    </div>
  );
}
