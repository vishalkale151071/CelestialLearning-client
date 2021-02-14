import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import CourseCard from './CourseCard';
import HomeCarousel from './HomeCarousel';
import Footer1 from './Footer';
import { Container, Row, Col } from 'shards-react';
import axios from 'axios';
import CarouselDemo from "../Utils/Carousel"

export default function Home({ history }) {
    const categories = ["IT & Software","Finance & Accounting","Development","Business","Marketing","Photography"]
    const [courses , setCourses] = useState([])

    useEffect(() => {
        axios.get('/home/getCourses').then(res => {
           
            setCourses(res.data.courseData)

        })

    }, [])

    return (
        <div className="home">
            <div className="header">
                <Header />
            </div>
            <HomeCarousel />

            
            {categories.map((value) => {
                    return <CarouselDemo cat={value}/>
                })}

            <Footer1 />
        </div>
    );
}
