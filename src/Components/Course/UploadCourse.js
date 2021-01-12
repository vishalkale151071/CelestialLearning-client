import React from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { Form, FormInput, FormGroup, FormTextarea, Button } from 'shards-react';
import '../styles/UploadCourse.css';
import { Dropdown } from 'react-bootstrap';

export default function UploadCourse() {
    // setup the step content
    const step1Content = (
        <div>
            <div className="create1">
                <Form>
                    <FormGroup>
                        <label className="labelcreate" htmlFor="name">What would you like to name your course?</label>
                        <FormInput type="text" id="name" placeholder="Enter Something.." />
                    </FormGroup>
                    <FormGroup>
                        <label className="labelcreate" htmlFor="desc">Give a short Description about your course!</label>
                        <FormTextarea rows="5" type="text" id="desc" placeholder="Enter Something.." />
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
    const step2Content = (
        <div>
            <div className="create2">
                <label className="labelcreate" htmlFor="dropdown">Where would you categorize your course?</label>
                <Dropdown className="createdropdown">
                    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                        Choose a Category.
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#Development">Development</Dropdown.Item>
                        <Dropdown.Item href="#Business">Business</Dropdown.Item>
                        <Dropdown.Item href="#Finance&Accounting">Finance & Accounting</Dropdown.Item>
                        <Dropdown.Item href="#IT&Software">IT & Software</Dropdown.Item>
                        <Dropdown.Item href="#Marketing">Marketing</Dropdown.Item>
                        <Dropdown.Item href="Photography">Photography</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
    const step3Content = (
        <div className="create1">
            <Form>
                <FormGroup>
                    <label className="labelcreate" htmlFor="price">Price</label>
                    <FormInput type="text" id="price" placeholder="Enter Something.." />
                </FormGroup>
                <FormGroup>
                    <label className="labelcreate" htmlFor="suit">For whom this course will be suitable for?</label>
                    <FormInput type="suit" id="suit" placeholder="Enter Something.." />
                </FormGroup>
            </Form>
        </div>
    );

    const step4Content = (
        <div className="create1">
            <Form>
                <FormGroup>
                    <label className="labelcreate" htmlFor="platform">Platform?</label>
                    <FormInput type="text" id="platform" placeholder="Enter Something.." />
                </FormGroup>
                <FormGroup>
                    <label className="labelcreate" htmlFor="prerequisites">Any prerequisites?</label>
                    <FormInput type="suit" id="prerequisites" placeholder="Enter Something.." />
                </FormGroup>
            </Form>
        </div>
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
        // handle the submit logic here
        // This function will be executed at the last step
        // when the submit button (next button in the previous steps) is pressed
    }

    return (
        <div>
            <Button className="buttonexit" theme="outline-danger" href="/author/dashboard">
                            Exit
                        </Button>
            <StepProgressBar
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
                        content: step3Content,
                        // validator: step3Validator
                    },
                    {
                        label: 'Step 4',
                        name: 'step 4',
                        content: step4Content,
                        // validator: step4Validator
                    }
                ]}
            />
            ;
        </div>
    );
}

// render the progress bar
