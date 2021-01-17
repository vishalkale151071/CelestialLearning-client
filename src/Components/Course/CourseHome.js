import React from 'react'
import { useParams } from "react-router";


export default function CourseHome() {

    let {title} = useParams();
    return (
        <div>
            <h1>This is home page of the course {title}!</h1>
        </div>
    )
}
