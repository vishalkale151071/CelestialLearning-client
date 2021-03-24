import React, { useEffect, useState, useRef } from 'react';
import SubscriberHeader from '../Subscriber/SubscriberHeader';
import { useHistory } from 'react-router-dom';
import '../styles/CourseView.css';
import '../styles/video-react.css'; // import css
import HLSSource from '../Utils/HLSSource';
import { Player, ControlBar, ForwardControl, ReplayControl, BigPlayButton } from 'video-react';
import { Collapse, Button } from 'antd';
import { Scrollbars } from 'rc-scrollbars';
import { useParams } from 'react-router';
import axios from 'axios';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from 'shards-react';
import '../styles/UserLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import Swal from 'sweetalert2';
import { render } from '@testing-library/react';
import FeedBack from 'react-feedback-popup';

import Axios from 'axios';
import Cookies from 'js-cookie';

export default function CourseFeedback() {
    let history = useHistory();
    const [stars,setStars] = useState(0);
    const [comment,setComment] = useState('');
    const { title } = useParams();

    const submitHandler = e => {
        e.preventDefault();
        console.log("i am here")
        Axios.post("/course/feedback",{
            stars,feedback: comment,courseName:title

        }).then(res=>{
            if(res.data.alert)
            {
                Swal.fire({
                    icon: 'info',
                    text: `${res.data.alert}`
                });
            }
            else
            {
                Swal.fire({
                    icon: 'success',
                    text: `${res.data.message}`
                });
            }
            
        }).catch(error=>{
            Swal.fire({
                        icon : 'error' ,
                        text : `${error.response.data.message}`
                    })
        })
       
    };

    //console.log(sections);
    return (
        
        <Form>
            
                <label htmlFor="stars">Stars</label>
                <FormInput
                    type="text"
                    id="stars"
                    placeholder="Stars"
                    onChange={event => {
                        setStars(event.target.value);
                    }}
                />
           
           
                <label htmlFor="comments">Comments</label>
                <FormInput
                    type="text"
                    id="comments"
                    placeholder="Comment"
                    onChange={event => {
                        setComment(event.target.value);
                        console.log(event.target.value)
                    }}
                />
           
            <Button className="button1" theme="success" onClick = {submitHandler}>
                Submit
            </Button>
        </Form>
  
           
    );
}
