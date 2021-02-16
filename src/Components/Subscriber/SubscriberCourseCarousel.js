import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import '../styles/CarouselDemo.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const SubscriberCourseCarousel = () => {
    const [courses, setCourses] = useState([]);
    const history = useHistory();
    const [courseID,setcourseID] = useState('')

    useEffect(() => {
        Axios.get('/subscriber/myCourses').then(res => {
            console.log('Result : ', res.data.courseData);
            setcourseID(res.data.courseData.courseId)
            console.log("ID:", courseID)
            setCourses(res.data.courseData);
        });
    }, []);

    const submit = title => {
        history.push(`/course/view/${title}`);
    };
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = courses => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <div className="CCimg">
                            <img
                                src={courses.courseThumbnail}
                                onError={e => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                                alt="error"
                                className="product-image"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="CCtitle">
                            <h4 className="p-mb-1">{courses.courseName}</h4>
                        </div>
                        <h6 className="p-mt-0 p-mb-3">Rs. {courses.price}</h6>
                        <div className="car-buttons p-mt-5">
                            <Button
                                icon="pi pi-play"
                                onClick={() => submit(courses.courseName)}
                                className="p-button p-button-rounded p-mr-2"
                            />
                            <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="CourseCorousel">
                <div className="carousel-demo">
                    <div className="card">
                        <Carousel
                            value={courses}
                            numVisible={5}
                            numScroll={5}
                            responsiveOptions={responsiveOptions}
                            itemTemplate={productTemplate}
                            header={<h5 className="CCHeader">Course Category</h5>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriberCourseCarousel;
