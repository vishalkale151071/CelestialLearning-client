import React, { useState, useEffect } from 'react';
import SubscriberHeader from './SubscriberHeader';
import '../styles/UserProfile.css';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Button } from 'shards-react';
import { Tabs, Tab } from 'react-bootstrap';
import Axios from "axios" ;
import { Upload, message } from 'antd';
import Avatar from 'react-avatar';

import axios from 'axios'

export default function SubscriberProfile() {

    const [url , setUrl] = useState('')
 
    const [firstName, setfirstName] = useState('First Name');
    const [middleName, setmiddleName] = useState('Middle Name');
    const [lastName, setlastName] = useState('Last Name');
    const [phNum, setphNum] = useState('Phone Number');
    const [linkedInURL, setlinkedInURL] = useState('LinkedIn URL');
    const [twitterURL, settwitterURL] = useState('Twitter URL');
    const [higherEducation, sethigherEducation] = useState('Higher Education');
    const [areaOfInterest, setareaOfInterest] = useState('Area Of Interest');


    const ImageUpload = () => {
        const [file , setFile] = useState('')
        const [imagePreviewUrl , setImagePreview] = useState('')

        useEffect(() => {
            axios.post('/subscriber/profileImageView').then(res => {
                setImagePreview(res.data.url)
            })
        } , [])
        
        const _handleSubmit = (e) => {
            e.preventDefault();
            // TODO: do something with -> this.state.file
            console.log('handle uploading-', file);
            const formData = new FormData();
            formData.append('image', file);
            axios({
                method: 'post',
                url: '/subscriber/profileImageUpdate',
                data: formData 
            })
        }

        const _handleImageChange = (e) => {
            e.preventDefault();

            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
                setFile(file)
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }

        return(
                <div >
                <form onSubmit={(e)=>_handleSubmit(e)}>
                <input  
                    type="file" 
                    onChange={(e)=>_handleImageChange(e)} 

                    />
                <button    
                    type="submit" 
                    onClick={(e)=>_handleSubmit(e)}>Upload Image</button>
                </form>
                <div style ={{textAlign : "center" , height : "100px" , width:"100px", border : "5px solid gray"}}>
                    {
                    imagePreviewUrl ? <img style={{width : "100%" , height : "100%"}}src={imagePreviewUrl} /> : <div >Please select an Image for Preview</div>
                    }
                </div>
            </div>
        )
    }

    



    useEffect(() => {
         Axios.post('/subscriber/profile').then(res => {

             setUrl(res.data.url)
             console.log("Project : " , res.data)
             setfirstName(res.data.profiledata.firstName)
             setmiddleName(res.data.profiledata.middleName)
             setlastName(res.data.profiledata.lastName)
             setphNum(res.data.profiledata.phNum)
             setlinkedInURL(res.data.profiledata.linkedInURL)
             settwitterURL(res.data.profiledata.twitterURL)
             sethigherEducation(res.data.profiledata.higherEducation)
             setareaOfInterest(res.data.profiledata.areaOfInterest)
         })

    } , [])


    

    return (
        <div>
            <SubscriberHeader />
            <div >
                <Tabs id="profileTab" className="profiletab">
                    <Tab eventKey="personal" title="Personal Details" >
                    <div className="ProfilePic">
                        
                        <ImageUpload />
                        </div>
                        <Form className="subform" >
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