import React, { useState, useEffect } from 'react';
import SubscriberHeader from './SubscriberHeader';
import logo from '../assets/logo.png';
import '../styles/UserProfile.css';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Button } from 'shards-react';
import { Tabs, Tab } from 'react-bootstrap';

export default function SubscriberProfile() {
    const [firstName, setfirstName] = useState('fname');
    const [middleName, setmiddleName] = useState('mname');
    const [lastName, setlastName] = useState('lname');
    const [phNum, setphNum] = useState('phn');
    const [linkedInURL, setlinkedInURL] = useState('lurl');
    const [twitterURL, settwitterURL] = useState('turl');
    const [higherEducation, sethigherEducation] = useState('he');
    const [areaOfInterest, setareaOfInterest] = useState('aoi');

    const updateProfile = () => {
        setfirstName('NEWNAME');
    };

    return (
        <div>
            <SubscriberHeader />
            <div className="profiletab">
                <Tabs  id="profileTab">
                    <Tab eventKey="personal" title="Personal Details">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#firstName">First Name</label>
                                <FormInput id="#firstName" value={firstName} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#middleName">Middle Name</label>
                                <FormInput id="#middleName" value={lastName} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#lastName">Last Name</label>
                                <FormInput id="#lastName" value={middleName} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#phNum">Phone Number</label>
                                <FormInput id="#phNum" value={phNum} />
                            </FormGroup>
                            <Button theme="info">Update</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="social" title="Social Media Handles">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#linkedInURL">LinkedIn URL</label>
                                <FormInput id="#linkedInURL" value={linkedInURL} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#twitterURL">Twitter URL</label>
                                <FormInput id="#twitterURL" value={twitterURL} />
                            </FormGroup>
                            <Button theme="info">Update</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="education" title="Education">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#higherEducation">Higher Education</label>
                                <FormInput id="#higherEducation" value={higherEducation} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#areaOfInterest">Area of Interest</label>
                                <FormInput id="#areaOfInterest" value={areaOfInterest} />
                            </FormGroup>
                            <Button theme="info">Update</Button>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}