import { Link, useLocation } from "react-router-dom";
import { publicNavigation, privateNavigation } from "./navigation";
import { Container } from "../ui/Container";
import { useAuth } from "../../context/AuthContext";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const location = useLocation();
  const { isAuth, signout, user } = useAuth();

  const navigation = isAuth ? privateNavigation : publicNavigation;

  // const signOutFunc = async () => {
  //   return await signOut();
  // }

  return (
    <nav className="bg-zinc-800">
      <Container className="flex justify-between items-center py-3">
        <Link to="/">
          <h1 className="sm:text-2xl text-lg sm:font-semibold font-bold">
            PERN TASKS
          </h1>
        </Link>
        <ul className="flex items-center justify-center md:gap-x-2 gap-x-2 sm:gap-x-1">
          {navigation.map(({ name, path, icon }) => (
            <li key={path}>
              <Link
                className={`flex gap-x-2 items-center justify-center ${
                  location.pathname === path && " bg-sky-500"
                } px-3 py-2 rounded-md`}
                to={path}
              >
                {icon}
                <span className="hidden md:block text-white">{name}</span>
              </Link>
            </li>
          ))}
          <li
            className="flex items-center gap-x-2 justify-center"
            onClick={() => {
              {
                signout();
              }
            }}
          >
            <FiLogOut className="text-white h-5 w-5" />
            <span className="hidden md:block text-white">Logout</span>
          </li>
          <li className="flex items-center gap-x-2 justify-center">
            <img
              src={user?.gravatar}
              alt="avatar"
              className="h-9 w-9 rounded-full"
            />
            <span className="text-white font-medium">{user?.name}</span>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
