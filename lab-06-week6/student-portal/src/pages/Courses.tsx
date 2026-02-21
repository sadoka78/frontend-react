import { Link, useSearchParams } from "react-router-dom";
import { courses } from "../data";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") || "asc";

  const sorted = [...courses].sort((a, b) =>
    sortOrder === "desc"
      ? b.title.localeCompare(a.title)
      : a.title.localeCompare(b.title)
  );

  const toggleSort = () => {
    setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" });
  };

  return (
    <div>
      <h1>Courses</h1>

      <button onClick={toggleSort}>
        Sort: {sortOrder.toUpperCase()}
      </button>

      <ul>
        {sorted.map((c) => (
          <li key={c.id}>
            <Link to={`/courses/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}