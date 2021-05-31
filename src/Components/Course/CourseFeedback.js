import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/CourseView.css';
import '../styles/video-react.css'; // import css
import { useParams } from 'react-router';
import { Form, FormInput, FormGroup, Button } from 'shards-react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from 'shards-react';
import '../styles/UserLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import Swal from 'sweetalert2';
import { Rate } from 'antd';
import Axios from 'axios';

export default function CourseFeedback() {
    let history = useHistory();
    const [stars, setStars] = useState(0);
    const [comment, setComment] = useState('');
    const { title } = useParams();
    const count = useRef(null);

    const submitHandler = e => {
        setStars(count.current.state.value);
        e.preventDefault();
        Axios.post('/course/feedback', {
            stars,
            feedback: comment,
            courseName: title
        })
            .then(res => {
                if (res.data.alert) {
                    Swal.fire({
                        icon: 'info',
                        text: `${res.data.alert}`
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        text: `${res.data.message}`
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    text: `${error.response.data.message}`
                });
            });
    };

    //console.log(sections);
    return (

        <div>
            <Card className="adminreview" theme="info" style={{ maxWidth: '450px' }}>
                <CardHeader></CardHeader>
                {/* <CardImg src="https://place-hold.it/300x200" /> */}
                <CardBody>
                    <CardTitle className="tex">Feedback</CardTitle>
                    <Form>
                        <label htmlFor="stars">Stars</label>
                        <p>
                            <Rate ref={count} />
                        </p>
                        <p>
                            <label htmlFor="comments">Comments</label>
                            <FormInput
                                type="text"
                                id="comments"
                                placeholder="Comment"
                                onChange={event => {
                                    setComment(event.target.value);
                                    console.log(event.target.value);
                                }}
                            />
                        </p>
                        <Button className="button1" theme="success" onClick={submitHandler}>
                            Submit
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}
