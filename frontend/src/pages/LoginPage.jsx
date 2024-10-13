import {
  Button,
  Card,
  Container,
  Input,
  Label,
} from "../components/ui/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signIn(data);

    if (user) navigate("/tasks");
  });

  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        {loginErrors?.map((err) => (
          <p key={err} className="text-red-500 text-sm text-center">
            {err}
          </p>
        ))}
        <h1 className="text-4xl font-bold my-2 text-center">Sign In</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
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
          <Label htmlFor="password">Password</Label>
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
          <Button>Sign In</Button>

          <div className="flex flex-col gap-3 mt-4 text-center border border-gray-300 rounded-md p-3">
            <p>Dont have an account?</p>
            <Link
              to="/register"
              className="bg-blue-700 hover:bg-blue-500 text-white px-3 py-2 rounded-md transition-all duration-300 ease-in-out"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}
