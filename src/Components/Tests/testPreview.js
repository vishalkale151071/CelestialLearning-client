import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import Test from './test';
import '../styles/tests.css';

const TestPreview = ({ history }) => {
    const { courseName, sectionName } = useParams();
    const [courseList, setCourseList] = useState([]);
    const [sectionList, setSectionList] = useState([]);
    
    useEffect(() => {    
        axios.get(
            '/assessment/courseList'
        ).then((res) => {
            setCourseList(res.data['courseList']);
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                text: err.response.data.message
            })
        });

        axios.post(
            '/assessment/sectionList',
            {
                "courseName": courseList[0]
            }
        ).then((res) => {
            setSectionList(res.data['sectionList']);
            console.log("got the sections");
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                text: err.response.data.message
            })
        })
    }, []);

    function setSections(){
        const crs = document.getElementById('courseName').value;
        axios.post(
            '/assessment/sectionList',
            {
                "courseName": crs
            }
        ).then((res) => {
            setSectionList(res.data['sectionList']);
            console.log("got the sections");
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                text: err.response.data.message
            })
        })
    }
    
    function updateTest(){
        let course = document.getElementById('courseName').value;
        let section = document.getElementById('sectionName').value;
        history.push('/test-preview/'+course+'/'+section);
    }

    return(
        <div>
            <label htmlFor='courseName'>Course Name : </label>
            <select id='courseName' defaultValue={courseName} onChange={ setSections }>
                {courseList.map((crs) => (
                    <option value={crs}>{crs}</option>
                ))}
            </select><br></br>
            <label htmlFor='sectionName'>Section Name : </label>
            <select id='sectionName' defaultValue={sectionName}>
                    {sectionList.map((section) => (
                        <option value={section}>{section}</option>
                    ))}
            </select><br></br>
            <button type='button' onClick={ updateTest }>Find</button>
            <div>
                <Test course={courseName} section={sectionName}></Test>
            </div>
        </div>
    );
}

export default TestPreview