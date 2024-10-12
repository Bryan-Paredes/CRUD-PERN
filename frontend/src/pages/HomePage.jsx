import { useAuth } from "../context/AuthContext.jsx";

export default function HomePage() {
  useAuth();

  return <div>HomePage</div>;
}
