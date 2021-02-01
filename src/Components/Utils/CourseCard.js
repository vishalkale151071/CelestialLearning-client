import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button } from 'shards-react';
import "../styles/CourseCard.css"
import { useHistory } from 'react-router-dom';


export default function CourseCard({course}) {
    const history = useHistory();

    const submit = (title) => {
       history.push(`/course/${title}`)
    }

    return (
        <div className="coursecard">
            <Card style={{ maxWidth: '250px'}} >
                <CardImg src={course.courseThumbnail} />
                <CardBody>
                    <CardTitle>{course.courseName}</CardTitle>
                    <p>{course.authorName}</p>
                    <p>Rs : {course.price}</p>
                    <Button onClick={() => submit(course.courseName)}>Read more &rarr;</Button>
                </CardBody>
            </Card>
        </div>
    );
}
