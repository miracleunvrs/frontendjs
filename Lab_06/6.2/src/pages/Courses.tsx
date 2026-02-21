import type { JSX } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { courses, type Course } from "../data";



const Courses = (): JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortOrder = searchParams.get("sort") || "asc";

const sortedCourses: Course[] = [...courses].sort((a,b) =>
        sortOrder==="desc"
            ? b.title.localeCompare(a.title)
            : a.title.localeCompare(b.title)
);
const toggleSort = (): void => {
        setSearchParams({
            sort: sortOrder === "asc" ? "desc" : "asc"

    });
};

return (
    <div>
        <h1> Courses</h1>
        <button onClick={toggleSort}>
            Sort: {sortOrder.toUpperCase()}
        </button>

        <ul>
            {sortedCourses.map(course => (
                <li key = {course.id}>
                    <Link to={`/courses/${course.id}`}>
                    {course.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);
};

export default Courses;