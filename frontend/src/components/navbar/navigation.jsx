import { FaTasks } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

export const publicNavigation = [
  {
    name: "About",
    path: "/about",
    icon: <FaCircleInfo />,
  },
  {
    name: "Login",
    path: "/login",
    icon: <CgLogIn />,
  },
  {
    name: "Register",
    path: "/register",
  },
];

export const privateNavigation = [
  {
    name: "Tareas",
    path: "/tasks",
    icon: <FaTasks className="w-5 h-5" />,
  },
  {
    name: "Crear",
    path: "/tasks/new",
    icon: <FaPlus className="w-5 h-5" />,
  },
  {
    name: "Perfil",
    path: "/profile",
    icon: <CgProfile className="w-5 h-5" />,
  },
];
