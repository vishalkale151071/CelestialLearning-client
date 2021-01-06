import React from 'react';
import CourseCard from '../Utils/CourseCard';
import AuthorHeader from './AuthorHeader';
import '../styles/UserDashboard.css';

export default function AuthorDashboard() {
    return (
        <div>
            <AuthorHeader />
            <div className="all">
                <h1>Welcome Author!</h1>
                Use the Icon on the top right corner to Go to Profile/ Account Settings/ Log out!
                <div className="main">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />

                </div>
            </div>
        </div>
    );
}
