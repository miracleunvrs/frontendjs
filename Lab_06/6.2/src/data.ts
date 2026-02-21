export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const courses: Course[] = [
    {
        id: 1,
        title: "Web dev",
        instructor: "John doe",
        description: "Learn html, css, js etc."
    },
    {
        id: 2,
        title: "Web dev",
        instructor: "John doe",
        description: "Learn html, css, js etc."
    },
    {
        id: 3,
        title: "Web dev",
        instructor: "John doe",
        description: "Learn html, css, js etc."
    }
];
export const getCourseById = (id: number): Course | undefined => {
    return courses.find(course => course.id === id);
};