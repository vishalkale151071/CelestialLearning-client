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

export default function AdminReview() {
    let history = useHistory();
    const [payment,setPayment] = useState(0);
    const [status,setStatus] = useState('');
    
    const { id } = useParams();
    
    const submitHandler = e => {
        e.preventDefault();
        console.log("i am here")
        console.log(payment)
        Axios.post("/admin/reviewRequest",{
            authorId :id,
            payment,
            status

        }).then(res=>{
            
                Swal.fire({
                    icon: 'success',
                    text: `${res.data.message}`
                });
            
            
        }).catch(error=>{
            Swal.fire({
                        icon : 'error' ,
                        text : `${error.response.data.message}`
                    })
        })
       
    };

   
    return (
        
        <Form>
            
                <label htmlFor="review">Review</label>
                <FormInput
                    type="text"
                    id="review"
                    placeholder="Approve/Reject"
                    onChange={event => {
                        setStatus(event.target.value);
                    }}
                />
                <label htmlFor="payment">Payment %</label>
                <FormInput
                    type="text"
                    id="payment"
                    placeholder="payment %"
                    onChange={event => {
                        setPayment(event.target.value);
                    }}
                />
             
            <Button className="button1" theme="success" onClick = {submitHandler}>
                Submit
            </Button>
        </Form>
  
           
    );
}
