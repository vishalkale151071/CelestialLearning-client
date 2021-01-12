import React, { useEffect } from 'react';
import { Header } from './Header';
import CourseCard from './CourseCard';
import HomeCarousel from './HomeCarousel';
import Footer1 from './Footer';
import { Container, Row, Col } from 'shards-react';


export default function Home({ history }) {
    return (
        <div className="home">
            <div className="header">
                <Header />
            </div>
            <HomeCarousel />

            <div className="main">
                <Container className="dr-example-container">
                    <Row>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <Container className="dr-example-container">
                    <Row>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer1 />
        </div>
    );
}
