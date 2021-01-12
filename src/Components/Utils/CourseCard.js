import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button } from 'shards-react';
import "../styles/CourseCard.css"

export default function CourseCard() {
    return (
        <div className="coursecard">
            <Card style={{ maxWidth: '250px'}} >
                <CardImg src="https://picsum.photos/300/200" />
                <CardBody>
                    <CardTitle>Lorem Ipsum</CardTitle>
                    <p></p>
                    <Button>Read more &rarr;</Button>
                </CardBody>
            </Card>
        </div>
    );
}
