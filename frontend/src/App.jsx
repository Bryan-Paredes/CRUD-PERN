import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import TasksPage from "./pages/TasksPage";
import TaskFromPage from "./pages/TaskFromPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/tasks/new" element={<TaskFromPage />} />
      <Route path="/tasks/1/edit" element={<TaskFromPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
