import { Link } from "react-router-dom";
import { Card } from "../components/ui";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h1 className="text-4xl font-bold my-2 text-center">404 Not Found</h1>
        <Link
          to="/"
          className="px-3 py-2 rounded-md bg-blue-500 text-white flex justify-center items-center"
        >
          Go to Home
        </Link>
      </Card>
    </div>
  );
}
