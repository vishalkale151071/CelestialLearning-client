import React, { useEffect } from 'react';
import CourseCard from '../Utils/CourseCard';
import SubscriberHeader from './SubscriberHeader';
import '../styles/UserDashboard.css';

export default function SubscriberDashboard( {history} ) {


    return (
        <div>
            <SubscriberHeader history = {history} />
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
