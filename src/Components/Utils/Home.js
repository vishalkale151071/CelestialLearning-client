import React, { useEffect } from 'react';
import { Header } from './Header';
import CourseCard from './CourseCard';
import HomeCarousel from './HomeCarousel';
import Footer1 from './Footer';
import { Container, Row, Col } from 'shards-react';

export default function Home({ history }) {
    const cardTitles = ['Complete Ethical Hacking Bootcamp 2021: Zero to Mastery', 'MERN', 'JAVA', 'PhotoShop', 'C++'];

    return (
        <div className="home">
            <div className="header">
                <Header />
            </div>
            <HomeCarousel />

            <div className="main">
                {cardTitles.map(title => (
                    <Container className="cc">
                        <Row>
                            <Col>
                                <CourseCard title={title} />
                            </Col>
                        </Row>
                    </Container>
                ))}
                ;
            </div>
            

            <Footer1 />
        </div>
    );
}
