import React from 'react'
import AuthorHeader from './AuthorHeader'

export default function AuthorCourses() {

    var cars = ["Saab", "Volvo", "BMW"];


    return (
        <div>
            <AuthorHeader />
            <h1>Author Courses</h1>
            {cars.map(cars => <div key={cars}> {cars} </div>)} 

        </div>
    )
}
