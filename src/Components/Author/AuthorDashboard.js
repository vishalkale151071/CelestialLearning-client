import React, {useState, useEffect} from 'react';
import CourseCard from '../Utils/CourseCard';
import AuthorHeader from './AuthorHeader';
import '../styles/UserDashboard.css';
import Axios from "axios"

export default function AuthorDashboard() {

    const [name, setName] = useState('');

    useEffect(() => {
        Axios.post('/subscriber/profile').then(res => {
            console.log("Project : " , res.data.message)
            setName(res.data.message.firstName)
        })
    }, []);

    return (
        <div>
            <AuthorHeader />
            <div className="all">
                <h1>Welcome {name}!</h1>
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
