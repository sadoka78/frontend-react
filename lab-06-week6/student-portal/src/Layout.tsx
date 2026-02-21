import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function Layout() {
  return (
    <>
      <nav className="nav">
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/courses">
          Courses
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about">
          About
        </NavLink>
      </nav>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">Student Portal 2026</footer>
    </>
  );
}