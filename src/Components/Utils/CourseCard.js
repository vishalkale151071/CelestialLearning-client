import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button } from 'shards-react';
import "../styles/CourseCard.css"
import { useHistory } from 'react-router-dom';


export default function CourseCard(props) {
    const history = useHistory();

    const submit = (title) => {
       history.push(`/course/${title}`)
    }

    return (
        <div className="coursecard">
            <Card style={{ maxWidth: '250px'}} >
                <CardImg src="https://picsum.photos/300/200" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <p></p>
                    <Button onClick={() => submit(props.title)}>Read more &rarr;</Button>
                </CardBody>
            </Card>
        </div>
    );
}
