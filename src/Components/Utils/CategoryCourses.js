import {React, useState, useEffect, setState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import Axios from 'axios';
import SubscriberHeader from '../Subscriber/SubscriberHeader';
import AuthorHeader from '../Author/AuthorHeader';
import { Header } from './Header';
import Cookies from 'js-cookie';
import CarouselDemo from './Carousel';


export default function CategoryCourses() {
    const {category}  = useParams();
    const [courses, setCourses] = useState([]);
    const history = useHistory();

    function Headerfunc() {
        if (Cookies.get('u') === 's') {
            return <SubscriberHeader />;
        } else if (Cookies.get('u') === 'a') {
            return <AuthorHeader />;
        } else {
            return <Header />;
        }
    }

    useEffect(() => {
        Axios.post('/home/getCourses', {
            category: category
        }).then(res => {
            console.log('Result : ', res.data.courseData);
            setCourses(res.data.courseData);
        });
    }, []);

    return (
        <div>
            <Headerfunc />
            <h4> This will show Courses of Category:{category}</h4>
            <CarouselDemo cat={category} />
        </div>
    )
}
