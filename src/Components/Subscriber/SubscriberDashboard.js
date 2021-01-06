import React from 'react';
import CourseCard from '../Utils/CourseCard';
import SubscriberHeader from './SubscriberHeader';
import '../styles/UserDashboard.css';

export default function SubscriberDashboard() {
    return (
        <div>
            <SubscriberHeader />
            <div className="all">
                <h1>Welcome Subscriber!</h1>
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
