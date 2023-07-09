import React from "react";

const students = [
    {
        id : 1,
        name : "Inje",
    },
    {
        id : 2,
        name : "Jeju",
    },
    {
        id : 3,
        name : "Seoul",
    },
    {
        id : 4,
        name : "Korea",
    },
];

function AttendanceBook (props) {
    return (
        <ul>
            {students.map((student) =>{
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
};

export default AttendanceBook;