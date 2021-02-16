import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { Form, FormInput, FormGroup, FormTextarea, Button } from 'shards-react';
import '../styles/UploadCourse.css';
import { Dropdown} from 'react-bootstrap';
import { Card, CardTitle,CardBody } from 'shards-react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function UploadCourse() {
    const [title, setTitle] = useState('Course Name');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [suitableFor, setSuitableFor] = useState('');
    const [platform, setPlatform] = useState('');
    const [prerequisite, setPrerequisite] = useState('');
    const [cat,setCat] = useState('Choose a Category');
    // setup the step content
    let history = useHistory();
    const step1Content = (
        <div>
            <Card className="uploadcard" style={{ maxWidth: '1500px' }}>
                <CardBody>
                    <CardTitle className="institle">Instructions</CardTitle>
                    <p>Instructions will be entered here</p>
                </CardBody>
            </Card>
        </div>
    );

    const step2Content = (
        <div>
            <Card className="uploadcard" style={{ maxWidth: '1500px' }}>
                <CardBody>
                    <div className="step2">
                        <Form>
                            <FormGroup>
                                <label className="labelstep2" htmlFor="name">
                                    What would you like to name your course?
                                </label>

                                <FormInput
                                    type="text"
                                    id="title"
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Enter Something.."
                                ></FormInput>
                            </FormGroup>
                            <FormGroup>
                                <label className="labelstep2" htmlFor="desc">
                                    Give a short Description about your course!
                                </label>
                                <FormTextarea
                                    rows="5"
                                    type="text"
                                    id="desc"
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Enter Something.."
                                />
                            </FormGroup>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </div>
    );

    const step3Content = (
        <div>
            <Card className="uploadcard" style={{ maxWidth: '1500px' }}>
                <CardBody>
                    <div className="step3">
                        <label className="labelstep3" htmlFor="dropdown">
                            Where would you categorize your course?
                        </label>
                        <Dropdown className="createdropdown">
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                Choose
                            </Dropdown.Toggle>
                            {/* <input type="text" onChange={e => setCategory(e.target.value)} /> */}
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={e=>setCategory('Development')}>Development</Dropdown.Item>
                                <Dropdown.Item onClick={e=>setCategory("Business")}>Business</Dropdown.Item>
                                <Dropdown.Item onClick={e=>setCategory("Finance & Accounting")}>Finance & Accounting</Dropdown.Item>
                                <Dropdown.Item onClick={e=>setCategory("IT & Software")}>IT & Software</Dropdown.Item>
                                <Dropdown.Item onClick={e=>setCategory("Marketing")}>Marketing</Dropdown.Item>
                                <Dropdown.Item onClick={e=>setCategory("Photography")}>Photography</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </CardBody>
            </Card>
        </div>
    );

    const step4Content = (
        <Card className="uploadcard" style={{ maxWidth: '1500px' }}>
            <CardBody>
                <div className="step4">
                    <Form>
                        <FormGroup>
                            <label className="labelstep4" htmlFor="suit">
                                For whom this course will be suitable for?
                            </label>
                            <FormInput
                                type="suit"
                                id="suit"
                                onChange={e => {
                                    setSuitableFor(e.target.value);
                                }}
                                placeholder="Enter Something.."
                            />
                        </FormGroup>
                        <FormGroup>
                            <label className="labelstep4" htmlFor="platform">
                                Platform?
                            </label>
                            <FormInput
                                type="text"
                                id="platform"
                                onChange={e => {
                                    setPlatform(e.target.value);
                                }}
                                placeholder="Enter Something.."
                            />
                        </FormGroup>
                        <FormGroup>
                            <label className="labelstep4" htmlFor="prerequisites">
                                Any prerequisites?
                            </label>
                            <FormInput
                                type="suit"
                                id="prerequisites"
                                onChange={e => {
                                    setPrerequisite(e.target.value);
                                }}
                                placeholder="Enter Something.."
                            />
                        </FormGroup>
                    </Form>
                </div>
            </CardBody>
        </Card>
    );

    // setup step validators, will be called before proceeding to the next step
    function step1Validator() {
        // return a boolean
    }

    function step2Validator() {
        // return a boolean
    }

    function step3Validator() {
        // return a boolean
    }

    function step4Validator() {
        // return a boolean
    }

    function onFormSubmit() {
        console.log(category)
        axios.post('/author/create-course', { title, description, category, suitableFor, platform, prerequisite }).then(res => {
            console.log(res.data.courseId);
            history.push({
                pathname: '/course/create',
                state: { id: res.data.courseId }
            });
        }).catch(error=>{
            if(error.response.data.message === "Unauthorised."){
                history.push('/author/login');
            }
            else
            {
                Swal.fire({
                    icon : 'error' ,
                    text : `${error.response.data.message}`
                })
            }
        });

        //
    }

    return (
        <div>
            <div className="createheading">Get Started With Your Course</div>
            <Button className="buttonexit" theme="outline-danger" href="/author/dashboard">
                Exit
            </Button>
            <StepProgressBar
                className="stepbar"
                startingStep={0}
                onSubmit={onFormSubmit}
                steps={[
                    {
                        label: 'Step 1',
                        name: 'step 1',
                        content: step1Content
                        // validator: step1Validator
                    },
                    {
                        label: 'Step 2',
                        name: 'step 2',
                        content: step2Content
                        // validator: step2Validator
                    },
                    {
                        label: 'Step 3',
                        name: 'step 3',
                        content: step3Content
                        // validator: step3Validator
                    },
                    {
                        label: 'Step 4',
                        name: 'step 4',
                        content: step4Content
                        // validator: step4Validator
                    }
                ]}
            />
        </div>
    );
}
