import React, { useState, useEffect } from 'react';

import AdminHeader from '../Admin/AdminHeader';
import '../styles/UserDashboard.css';
import AdminCarousel from './AdminCarousel';


export default function AdminDashboard({ history }) {
    

    return (
        <div>
            <AdminHeader history={history} />
            <div className="all">
                <h1>Welcome</h1>
                <AdminCarousel/>
                
            </div>
        </div>
    );
}
