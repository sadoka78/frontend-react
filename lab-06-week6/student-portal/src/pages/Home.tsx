import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Student Portal</h1>
      <p>Use the navigation or quick links below:</p>
      <ul>
        <li><Link to="/courses">Go to Courses</Link></li>
        <li><Link to="/about">Go to About</Link></li>
      </ul>
    </div>
  );
}