import React, { useState, useEffect } from 'react';
import AuthorHeader from './AuthorHeader';
import '../styles/UserDashboard.css';
import Axios from 'axios';
import AuthorCourseCarousel from './AuthorCourseCarousel';
import Swal from 'sweetalert2';
import AuthorLiveCarousel from './AuthorLiveCarousel'

export default function AuthorDashboard({ history }) {
    const [name, setName] = useState('');

    useEffect(() => {
        Axios.post('/author/profile')
            .then(res => {
                setName(res.data.profiledata.firstName);
            })
            .catch(error => {
                if (error.response.data.message === 'Unauthorised.') {
                    history.push('/author/login');
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: `${error.response.data.message}`
                    });
                }
            });
    }, []);

    return (
        <div>
            <AuthorHeader history={history} />
            <div className="all">
                <h1 className="welcome">Welcome {name}!</h1>
                
                <AuthorCourseCarousel />
                <AuthorLiveCarousel/>
            </div>
        </div>
    );
}
