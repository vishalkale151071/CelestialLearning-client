import axios from 'axios';
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
const TestPreview = () => {
    let history = useHistory();
    const [courseList, setCourseList] = useState([]);
    const [sectionList, setSectionList] = useState([]);
    const [questionList,setQuestionList] = useState([]);
    useEffect(() => {
        axios.get(
            '/assessment/courseList'
        ).then((res) => {
            setCourseList(res.data['courseList']);
            console.log("got the data.")
        }).catch((err) => {
            console.log(err)
        });
    }, []);

    function setSections(){
        const course = document.getElementById('courseName').value;
        axios.post(
            '/assessment/sectionList',
            {
                "courseName": course
            }
        ).then((res) => {
            setSectionList(res.data['sectionList']);
            console.log("got the sections");
        }).catch((err) => {
            console.log(err)
        })
    }
    function getQuestions()
    {
        const course = document.getElementById('courseName').value;
        const section = document.getElementById('sectionName').value;
        axios.post(
            '/assessment/attemptTest',
            {
                "courseName" : course,
                "sectionName" : section
            }).then((res)=>{
                setQuestionList(res.data['testData']);
                console.log(res.data)
            }).catch((err)=>{
                if (err.response.data.message === 'Unauthorised.') {
                    history.push('/author/login');
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: `${err.response.data.message}`
                    });
                }
            })

    }

    return(
        <div>
            <label htmlFor='courseName'>Course Name : </label>
            <select id='courseName' onChange={ setSections }>
                {courseList.map((course) => (
                    <option value={course}>{course}</option>
                ))}
            </select><br></br>
            <label htmlFor='sectionName'>Section Name : </label>
            <select id='sectionName' onChange = {getQuestions}>
                    {sectionList.map((section) => (
                        <option value={section}>{section}</option>
                    ))}
            </select>
        </div>
    );
}

export default TestPreview