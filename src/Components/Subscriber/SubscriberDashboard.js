import React, { useState, useEffect } from 'react';
import CourseCard from '../Utils/CourseCard';
import SubscriberHeader from './SubscriberHeader';
import Axios from 'axios';
import Swal from 'sweetalert2';
import SubscriberCourseCarousel from './SubscriberCourseCarousel';
import Recharts from '../Utils/Recharts';
import '../styles/UserDashboard.css';

import Blink from 'react-blink-text';
import SubscriberLiveCarousal from './SubscriberLiveCarousel'

export default function SubscriberDashboard({ history }) {
    const [courseID, setcourseID] = useState('');
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

    
    const [courses, setCourses] = useState([]);
    const [status, setCourseStatus] = useState('');
    const [name, setName] = useState('');
    const[noOfSessions , setNo] = useState(0)

    useEffect(() => { 
        Axios.post('/subscriber/profile')
            .then(res => {
                setName(res.data.profiledata.firstName);
            })
            .catch(error => {
                if (error.response.data.message === 'Unauthorised.') {
                    history.push('/subscriber/login');
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: `${error.response.data.message}`
                    });
                }
            });

             Axios.post('/subscriber/getMeeting')
            .then(res => {
                
                console.log("Live ; " , res.data.message.length)
                setNo(res.data.message.length)
                
            })     
            .catch(error => {
                if (error.response.data.message === 'Unauthorised.') {
                    history.push('/subscriber/login');
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: `${error.response.data.message}`
                    });
                }
            }); 



        
    }, []);

    // const Liveses = () => {
    //     if (joinMeeting) {
    //         return (
    //             <div>
    //             </div>
    //         );
    //     } else {
    //         return <div></div>;
    //     }
    // };
    return (
        <div>
            <SubscriberHeader history={history} />

            {noOfSessions > 0 && (<Blink color="red" text="Live Session !" fontSize="20" /> ) }
              

            
                <div className="all ">
                    <h1 className="welcome">Welcome {name}</h1>

                   
                    {status}

                    <SubscriberCourseCarousel />
                    <SubscriberLiveCarousal />
                </div>
            
        </div>
    );
}
