import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

export default function CourseCard() {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>
        </p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
  );
}