import React, { useState, useEffect } from 'react';
import CourseCard from '../Utils/CourseCard';
import SubscriberHeader from './SubscriberHeader';
import Axios from 'axios';
import Swal from 'sweetalert2'
import SubscriberCourseCarousel from "./SubscriberCourseCarousel"
import Recharts from "../Utils/Recharts"
import Zoom from "../LiveSession/Zoom"
import '../styles/UserDashboard.css';

export default function SubscriberDashboard({ history }) {
    const [courseID,setcourseID] = useState('')
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    
    const [joinMeeting, setJoinMeeting] = useState(false);
    const [courses, setCourses] = useState([]);
    const [status,setCourseStatus] = useState('')
    const [name, setName] = useState('');

    useEffect(() => {
        Axios.post('/subscriber/profile').then(res => {
            setName(res.data.profiledata.firstName);
        }).catch(error => {
            if(error.response.data.message === "Unauthorised."){
                history.push('/subscriber/login');
            }
            else
            {
                Swal.fire({
                    icon : 'error' ,
                    text : `${error.response.data.message}`
                })
            }
        });

        // Axios.get('/subscriber/myCourses').then(res => {
        //     console.log('Result : ', res.data.courseData);
        //     console.log("efdef",res.data.courseData[0].courseId)
        //     setcourseID(res.data.courseData.courseId)
        //     console.log("ID:", courseID)
        //     setCourses(res.data.courseData);
        // }).catch(error => {
        //     if(error.response.data.message === "Unauthorised."){
        //         history.push('/subscriber/login');
        //     }
        //     else
        //     {
        //         setCourseStatus("No Courses")
        //     }
        // });
    }, []);

    return (
        <div>
            <SubscriberHeader history={history} />
            {joinMeeting ? (<Zoom/>):
            
            
                <div className="all">
                    <h1>Welcome {name}</h1>
                    <button style={{border: '1px solid #fff'}} onClick={() => setJoinMeeting(true)}>Join Meeting</button>
                    {status}
                    
                        <SubscriberCourseCarousel />
                </div>
            }
            
        </div>
    );
}
