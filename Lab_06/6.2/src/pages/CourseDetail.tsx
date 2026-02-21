import { useLoaderData, useParams } from "react-router-dom";
import type { Course } from "../data";
import type { JSX } from "react";

const CourseDetail = (): JSX.Element =>{
    const {id} = useParams();
    const {course} = useLoaderData() as {course: Course};
    return(
        <div>
            <h2>{course.title}</h2>
            <p><strong>Instructor: </strong> {course.instructor}</p>
            <p>{course.description}</p>
            <p><strong>Route Id: </strong>{id}</p>
        </div>
    );
};
export default CourseDetail;