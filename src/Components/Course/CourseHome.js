import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/CourseHome.css';
import { useParams } from 'react-router';
import Header from '../Utils/Header';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, CardImg, Button } from 'shards-react';
import logo from '../assets/CEH.jpg';

export default function CourseHome() {
    const history = useHistory();
    let { title } = useParams();
    let description =
        'Learn Ethical Hacking + Penetration Testing! Use real techniques by black hat hackers then learn to defend against them!';

    const butclk = (title) => {
        history.push(`/course/view/${title}`);
    };

    return (
        <div>
            <Header />
            <div className="topCard">
                <Card className="tpCard" style={{ maxWidth: '1500px' }}>
                    <CardHeader></CardHeader>
                    <CardImg className="crdImg" src={logo} />
                    <CardBody>
                        <CardTitle className="crhmCT">{title}</CardTitle>
                        <Button className="crhmBT" onClick={() => butclk(title)}>View</Button>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </div>
    );
}
