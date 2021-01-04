import React from 'react';
import { Header } from './Header';
import CourseCard from './CourseCard';

export default function Home() {
    return (
        <div className="home">
            <Header />
            <div className="main">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
        </div>
    );
}
