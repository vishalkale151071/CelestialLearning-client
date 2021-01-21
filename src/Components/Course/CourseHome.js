import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/CourseHome.css';
import { useParams } from 'react-router';
import Header from '../Utils/Header';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, CardImg, Button } from 'shards-react';
import logo from '../assets/CEH.jpg';
import Footer1 from '../Utils/Footer';
import { Collapse } from 'antd';

export default function CourseHome() {
    const { Panel } = Collapse;

    const history = useHistory();
    let { title } = useParams();
    let description =
        'Learn Ethical Hacking + Penetration Testing! Use real techniques by black hat hackers then learn to defend against them!';

    const butclk = title => {
        history.push(`/course/view/${title}`);
    };



    return (
        <div>
            <Header />
            <div className="topCard">
                <Card className="tpCard" style={{ maxWidth: '1800px' }}>
                    <CardImg className="crdImg" src={logo} />
                    <CardBody>
                        <CardTitle className="crhmCT">{title}</CardTitle>
                        <Button className="crhmBT" onClick={() => butclk(title)}>
                            View
                        </Button>
                    </CardBody>
                </Card>
                <div>
                    <Card className="tpCard1" style={{ maxWidth: '1800px' }}>
                        <CardHeader></CardHeader>
                        <CardBody>
                            <CardTitle className="crhmCT">{title}</CardTitle>
                            <div className="CoHoText">
                            Description:
                            </div>
                            <Collapse className="CoHoCollaps">
                                <Panel header="Section 1" key="1">
                                    <p>
                                        <a href="#vid">Video1</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video2</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video3</a>
                                    </p>
                                </Panel>
                                <Panel header="Section 2" key="2">
                                    <p>
                                        <a href="#vid">Video1</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video2</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video3</a>
                                    </p>
                                </Panel>
                                <Panel header="Section 3" key="3">
                                    <p>
                                        <a href="#vid">Video1</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video2</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video3</a>
                                    </p>
                                </Panel>
                                <Panel header="Section 4" key="4">
                                    <p>
                                        <a href="#vid">Video1</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video2</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video3</a>
                                    </p>
                                </Panel>
                                <Panel header="Section 5" key="5">
                                    <p>
                                        <a href="#vid">Video1</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video2</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video3</a>
                                    </p>
                                </Panel>
                                <Panel header="Section 6" key="6">
                                    <p>
                                        <a href="#vid">Video1</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video2</a>
                                    </p>
                                    <p>
                                        <a href="#vid">Video3</a>
                                    </p>
                                </Panel>
                            </Collapse>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Card>
                </div>
            </div>

            <div><Footer1 /></div>
        </div>
    );
}
