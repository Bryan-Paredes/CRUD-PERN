import { useAuth } from "../context/AuthContext.jsx";

export default function ProfilePage() {
  const { user } = useAuth();

  return <div>{JSON.stringify(user)}</div>;
}
