import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/CourseHome.css';
import { useParams } from 'react-router';
import Header from '../Utils/Header';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, CardImg, Button, Container, Row, Col } from 'shards-react';
import logo from '../assets/CEH.jpg';
import Footer1 from '../Utils/Footer';
import { Collapse } from 'antd';
import { Divider } from 'semantic-ui-react';
import HLSSource from '../Utils/HLSSource';
import { Player, ControlBar, ForwardControl, ReplayControl } from 'video-react';

export default function CourseHome() {
    // Test COnst
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const Description =
        'Ant Design is a set of enterprise-class UIs designed for web applications. It provides over 50 customizable components that can be used to craft beautiful applications, such as cards, buttons, various layout helpers, navbars, and more. Ant Design recently beat Material UI to become the most popular React UI library on GitHub, with over 56k stars. It’s used in tons of applications, spanning a multitude of industries, so it’s well supported. Every aspect of Ant Design is';

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
                        <div className="SmallDesc">
                            <p><h6>Price: 4999</h6></p>
                            <p>Author: Hacker Boi</p>
                            <p>Category: Cyber Security</p>
                            <p>Language: English</p>
                        </div>
                        <Button className="crhmBT" onClick={() => butclk(title)}>
                            View
                        </Button>
                        <Button className="WishlistButton">Wishlist</Button>
                        <Button className="ShareButton">Share</Button>
                    </CardBody>
                </Card>
                <div>
                    <Card className="tpCard1" style={{ maxWidth: '1800px' }}>
                        <CardBody>
                            <div className="TextDescription">
                                <h2>Description:</h2>
                                {Description}
                                <div className="TextSuitableFor">
                                    <h3>Suitable For:</h3>
                                    This course is most suitable for Engineering students who wants to make a career in cybersecurity!
                                </div>
                            </div>
                            <h2 className="H2Heading">Course Preview:</h2>
                            <div className="CRHMVidPlayerDiv">
                                <Player className="CRHMvidPlayer">
                                    <HLSSource
                                        isVideoChild
                                        src="https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
                                    />
                                    <ControlBar className="ctrlbar" autoHide={true}>
                                        <ReplayControl seconds={10} order={2.2} />
                                        <ForwardControl seconds={10} order={3.2} />
                                    </ControlBar>
                                </Player>
                            </div>
                            <h2 className="H2Heading">What You'll Learn:</h2>

                            <div className="TextWhatLearn">
                                <Container>
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>Spf/Dmarc</li>
                                                <li>Cookie Issues</li>
                                                <li>XSS</li>
                                                <li>SQLi</li>
                                            </ul>
                                        </Col>

                                        <Col>
                                            <ul>
                                                <li>IDOR</li>
                                                <li>Authentication Bypass</li>
                                                <li>Rate Limiting</li>
                                                <li>RCE</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <h2 className="H2Heading">PreRequisites:</h2>
                            <div className="PrereqText">
                                <ul>
                                    <li>Basic Linux Commands</li>
                                    <li>Python</li>
                                    <li>Basics of Networking</li>
                                    <li>Basics of Web TEchnology</li>
                                </ul>
                            </div>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Card>
                </div>
                <h3 className="ContentsHeading">Contents</h3>
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
            </div>

            <div>
                <Footer1 />
            </div>
        </div>
    );
}
