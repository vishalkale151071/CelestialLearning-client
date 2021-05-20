import React, { useState, useEffect } from 'react';
import AuthorHeader from '../Author/AuthorHeader';
import '../styles/UserDashboard.css';
import AdminCarousel from './AdminCarousel';


export default function AdminDashboard({ history }) {
    

    return (
        <div>
            <AuthorHeader history={history} />
            <div className="all">
                <h1>Welcome</h1>
                <AdminCarousel/>
                
            </div>
        </div>
    );
}
