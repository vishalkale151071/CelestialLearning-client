import React, { useEffect } from 'react';
import { Header } from './Header';
import CourseCard from './CourseCard';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { CookiesProvider } from 'react-cookie';
export default function Home({ history }) {
    
    
    
    return (
        <div className="home">
            <Header />
            <div className="main">
                        
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
        </div>
    );
}
