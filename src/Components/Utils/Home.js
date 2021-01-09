import React from 'react';
import { Header } from './Header';
import CourseCard from './CourseCard';
import HomeCarousel from './HomeCarousel';
import Footer1 from './Footer';

export default function Home() {
    return (
        <div className="home">
            <div className="header">
                <Header />
            </div>
            <HomeCarousel />

            <div className="main">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
            <Footer1 />
        </div>
    );
}
