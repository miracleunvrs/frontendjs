import type { JSX } from "react";

interface Course {
    id: number;
    title: string;
}

const courses: Course[] = [
    { id: 1, title: "Web Development" },
    { id: 2, title: "Data Science" },
    { id: 3, title: "Database Systems" },
    { id: 4, title: "Software Engineering" }
];

const Courses = (): JSX.Element => {
    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
};
export default Courses;