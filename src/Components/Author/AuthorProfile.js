import React, { useState, useEffect } from 'react';
import AuthorHeader from './AuthorHeader';
import logo from '../assets/logo.png';
import '../styles/UserProfile.css';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Button } from 'shards-react';
import { Tabs, Tab } from 'react-bootstrap';

export default function AuthorProfile() {
    const [firstName, setfirstName] = useState('fname');
    const [middleName, setmiddleName] = useState('mname');
    const [lastName, setlastName] = useState('lname');
    const [phNum, setphNum] = useState('phn');
    const [linkedInURL, setlinkedInURL] = useState('lurl');
    const [twitterURL, settwitterURL] = useState('turl');
    const [qualification, setqualification] = useState('qua');
    const [areaOfInterest, setareaOfInterest] = useState('aoi');

    const updateProfile = () => {
        setfirstName(firstName);
    };

    return (
        <div>
            <AuthorHeader />
            <div className="profiletab">
                <Tabs id="profileTab">
                    <Tab eventKey="personal" title="Personal Details">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#firstName">First Name</label>
                                <FormInput
                                    id="#firstName"
                                    value={firstName}
                                    onChange={event => {
                                        setfirstName(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#middleName">Middle Name</label>
                                <FormInput
                                    id="#middleName"
                                    value={lastName}
                                    onChange={event => {
                                        setmiddleName(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#lastName">Last Name</label>
                                <FormInput
                                    id="#lastName"
                                    value={middleName}
                                    onChange={event => {
                                        setlastName(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#phNum">Phone Number</label>
                                <FormInput
                                    id="#phNum"
                                    value={phNum}
                                    onChange={event => {
                                        setphNum(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <Button theme="info" onClick={updateProfile}>Update</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="social" title="Social Media Handles">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#linkedInURL">LinkedIn URL</label>
                                <FormInput
                                    id="#linkedInURL"
                                    value={linkedInURL}
                                    onChange={event => {
                                        setlinkedInURL(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#twitterURL">Twitter URL</label>
                                <FormInput
                                    id="#twitterURL"
                                    value={twitterURL}
                                    onChange={event => {
                                        settwitterURL(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <Button theme="info">Update</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="education" title="Education">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#qualification">Qualification</label>
                                <FormInput
                                    id="#qualification"
                                    value={qualification}
                                    onChange={event => {
                                        setqualification(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#areaOfInterest">Area of Interest</label>
                                <FormInput
                                    id="#areaOfInterest"
                                    value={areaOfInterest}
                                    onChange={event => {
                                        setareaOfInterest(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <Button theme="info">Update</Button>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
