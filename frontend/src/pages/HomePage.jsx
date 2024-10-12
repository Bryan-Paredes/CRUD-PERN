import { useAuth } from "../context/AuthContext.jsx";

export default function HomePage() {
  const data = useAuth();
  console.log(data);

  return <div>HomePage</div>;
}
