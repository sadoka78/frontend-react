export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "Dr. Sakhniuk",
    description: "JSX, components, props, state, and basic hooks.",
  },
  {
    id: 2,
    title: "TypeScript for Frontend",
    instructor: "A. Boduch",
    description: "Types, interfaces, generics, and strict typing in React apps.",
  },
  {
    id: 3,
    title: "Web Security Basics",
    instructor: "Cyber Lab",
    description: "OWASP Top 10 overview and secure web development practices.",
  },
  {
    id: 4,
    title: "Databases 101",
    instructor: "IT Faculty",
    description: "Relational basics, keys, joins, and simple normalization.",
  },
];

export function getCourseById(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}