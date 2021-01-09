import React from 'react';
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Button } from 'shards-react';
import "../styles/CourseCard.css"

export default function CourseCard() {
    return (
        <div className="coursecard">
            <Card style={{ maxWidth: '250px'}} >
                <CardHeader>Card header</CardHeader>
                <CardImg src="https://picsum.photos/300/200" />
                <CardBody>
                    <CardTitle>Lorem Ipsum</CardTitle>
                    <p></p>
                    <Button>Read more &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
            </Card>
        </div>
    );
}
