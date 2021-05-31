import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/AdminReview.css';
import { useParams } from 'react-router';
import { Form, FormInput, FormGroup, Button } from 'shards-react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from 'shards-react';
import '../styles/UserLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { Dropdown} from 'react-bootstrap';



export default function AdminReview() {
    let history = useHistory();
    const [payment, setPayment] = useState(0);
    const [approval, setApproval] = useState('');


    const { id } = useParams();

    const submitHandler = e => {
        e.preventDefault();
        console.log('i am here');
        console.log(payment);
        Axios.post('/admin/reviewRequest', {
            authorId: id,
            payment,
            approval
        })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    text: `${res.data.message}`
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    text: `${error.response.data.message}`
                });
            });
    };

    return (
        <Card className="adminreview" theme="info" style={{ maxWidth: '450px' }}>
            <CardHeader></CardHeader>
            {/* <CardImg src="https://place-hold.it/300x200" /> */}
            <CardBody>
                <CardTitle className="tex">User Review</CardTitle>
                <Form>
                    <label htmlFor="review">Review</label>
                    <Dropdown className="admindropdown">
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Choose
                            </Dropdown.Toggle>
                            {/* <input type="text" onChange={e => setCategory(e.target.value)} /> */}
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={e=>setApproval('Accept')}>Accept</Dropdown.Item>
                                <Dropdown.Item onClick={e=>setApproval("Reject")}>Reject</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    <label htmlFor="payment">Payment %</label>
                    <FormInput
                        type="text"
                        id="payment"
                        placeholder="Payment %"
                        onChange={event => {
                            setPayment(event.target.value);
                        }}
                    />

                    <Button className="adminbutton" theme="success" onClick={submitHandler}>
                        Submit
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
}
