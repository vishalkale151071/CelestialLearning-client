import React, { useEffect } from 'react';
import { Header } from './Header';
import CourseCard from './CourseCard';
import HomeCarousel from './HomeCarousel';
import Footer1 from './Footer';

import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { CookiesProvider } from 'react-cookie';

export default function Home({ history }) {
    
    
        return (
        <div className="home">
            <div className="header">
                <Header />
            </div>
            <HomeCarousel />

            <div className="main">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
            <Footer1 />
        </div>
    );
}
