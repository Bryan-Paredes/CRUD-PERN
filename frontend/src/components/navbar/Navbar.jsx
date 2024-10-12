import { Link, useLocation } from "react-router-dom";
import { navigation } from "./navigation";
import { Container } from "../ui/Container";

export default function Navbar() {
  const location = useLocation();
  console.log(location);

  return (
    <nav className="bg-zinc-800">
      <Container className="flex justify-between items-center py-3">
        <Link to="/">
          <h1 className="text-2xl font-bold">PERN TASKS</h1>
        </Link>
        <ul className="flex gap-x-2">
          {navigation.map(({ name, path }) => (
            <li
              key={name}
              className={`${
                location.pathname === path && "bg-sky-500"
              } px-3 py-2 rounded-md`}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
