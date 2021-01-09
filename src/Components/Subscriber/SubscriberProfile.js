import React, { useState, useEffect } from 'react';
import SubscriberHeader from './SubscriberHeader';
import logo from '../assets/logo.png';
import '../styles/UserProfile.css';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Button } from 'shards-react';
import { Tabs, Tab } from 'react-bootstrap';
import Axios from "axios" ;

export default function SubscriberProfile() {
    const [firstName, setfirstName] = useState('First Name');
    const [middleName, setmiddleName] = useState('Middle Name');
    const [lastName, setlastName] = useState('Last Name');
    const [phNum, setphNum] = useState('Phone Number');
    const [linkedInURL, setlinkedInURL] = useState('LinkedIn URL');
    const [twitterURL, settwitterURL] = useState('Twitter URL');
    const [higherEducation, sethigherEducation] = useState('Higher Education');
    const [areaOfInterest, setareaOfInterest] = useState('Area Of Interest');


    useEffect(() => {
         Axios.post('/subscriber/profile').then(res => {
             console.log("Project : " , res.data.message)
             setfirstName(res.data.message.firstName)
             setmiddleName(res.data.message.middleName)
             setlastName(res.data.message.lastName)
             setphNum(res.data.message.phNum)
             setlinkedInURL(res.data.message.linkedInURL)
             settwitterURL(res.data.message.twitterURL)
             sethigherEducation(res.data.message.higherEducation)
             setareaOfInterest(res.data.message.areaOfInterest)
         })

    } , [])


    

    return (
        <div>
            <SubscriberHeader />
            <div className="profiletab">
                <Tabs  id="profileTab">
                    <Tab eventKey="personal" title="Personal Details">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#firstName">First Name</label>
                                <FormInput id="#firstName" value={firstName} onChange = {(e) => setfirstName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#middleName">Middle Name</label>
                                <FormInput id="#middleName" value={middleName} onChange = {(e) => setmiddleName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#lastName">Last Name</label>
                                <FormInput id="#lastName" value={lastName} onChange = {(e) => setlastName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#phNum">Phone Number</label>
                                <FormInput id="#phNum" value={phNum} onChange = {(e) => setphNum(e.target.value)}/>
                            </FormGroup>
                            <Button theme="info" 
                                onClick = {() => {
                                    Axios.post('/subscriber/update' , { firstName, middleName, lastName, phNum, linkedInURL, twitterURL, higherEducation, areaOfInterest }).then(res => {
                                    })
                                }}
                            >Update</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="social" title="Social Media Handles">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#linkedInURL">LinkedIn URL</label>
                                <FormInput id="#linkedInURL" value={linkedInURL} onChange = {(e) => setlinkedInURL(e.target.value)}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#twitterURL">Twitter URL</label>
                                <FormInput id="#twitterURL" value={twitterURL} onChange = {(e) => settwitterURL(e.target.value)}/>
                            </FormGroup>
                            <Button theme="info"
                                onClick = {() => {
                                    Axios.post('/subscriber/update' , { firstName, middleName, lastName, phNum, linkedInURL, twitterURL, higherEducation, areaOfInterest }).then(res => {

                                    })
                                }}
                            >Update</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="education" title="Education">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#higherEducation">Higher Education</label>
                                <FormInput id="#higherEducation" value={higherEducation} onChange = {(e) => sethigherEducation(e.target.value)}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#areaOfInterest">Area of Interest</label>
                                <FormInput id="#areaOfInterest" value={areaOfInterest} onChange = {(e) => setareaOfInterest(e.target.value)}/>
                            </FormGroup>
                            <Button theme="info"
                             onClick = {() => {
                                Axios.post('/subscriber/update' , { firstName, middleName, lastName, phNum, linkedInURL, twitterURL, higherEducation, areaOfInterest }).then(res => {

                                })
                            }}
                            >Update</Button>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}