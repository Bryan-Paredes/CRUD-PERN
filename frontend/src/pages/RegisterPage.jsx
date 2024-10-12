import {
  Button,
  Card,
  Container,
  Input,
  Label,
} from "../components/ui/index.js";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, errors: signupErrors } = useAuth();
  const navigate = useNavigate();

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
    const user = await signUp(data);
    if (user) {
      navigate("/profile");
    }
  });
  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        {signupErrors?.map((err) => (
          <p key={err} className="text-red-500 text-sm text-center">
            {err}
          </p>
        ))}
        <h3 className="text-3xl font-bold">Register</h3>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Name</Label>
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

          <Button>Register</Button>

          <div className="flex flex-col gap-3 mt-4 text-center border border-gray-300 rounded-md p-3">
            <p>Already have an account?</p>
            <Link
              to="/login"
              className="bg-blue-700 hover:bg-blue-500 text-white px-3 py-2 rounded-md transition-all duration-300 ease-in-out"
            >
              Sign In
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}
