import React, { useState, useEffect } from 'react';
import AuthorHeader from './AuthorHeader';
import '../styles/UserProfile.css';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Button } from 'shards-react';
import { Tabs, Tab } from 'react-bootstrap';
import Axios from 'axios';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

export default function AuthorProfile() {
    const [firstName, setfirstName] = useState('First Name');
    const [middleName, setmiddleName] = useState('Middle Name');
    const [lastName, setlastName] = useState('Last Name');
    const [phNum, setphNum] = useState('Phone Number');
    const [linkedInURL, setlinkedInURL] = useState('LinkedIn URL');
    const [twitterURL, settwitterURL] = useState('Twitter URL');
    const [qualification, setqualification] = useState('Qaulification');
    const [biography, setBiography] = useState('Biography ');

    const AuthorProfilePic = () => {
        const [fileList, setFileList] = useState([]);

        const onChange = ({ fileList: newFileList }) => {
            setFileList(newFileList);
        };

        const onPreview = async file => {
            let src = file.url;
            if (!src) {
                src = await new Promise(resolve => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj);
                    reader.onload = () => resolve(reader.result);
                });
            }
            const image = new Image();
            image.src = src;
            const imgWindow = window.open(src);
            imgWindow.document.write(image.outerHTML);
        };

        return (
            <ImgCrop rotate>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 1 && '+ Upload'}
                </Upload>
            </ImgCrop>
        );
    };

    useEffect(() => {
        Axios.post('/author/profile').then(res => {
            //console.log("Project : " , res.data)
            setfirstName(res.data.message.firstName);
            setmiddleName(res.data.message.middleName);
            setlastName(res.data.message.lastName);
            setphNum(res.data.message.phNum);
            setlinkedInURL(res.data.message.linkedInURL);
            settwitterURL(res.data.message.twitterURL);
            setqualification(res.data.message.qualification);
            setBiography(res.data.message.biography);
        });
    }, []);

    return (
        <div>
            <AuthorHeader />
            <div className="profiletab">
                <Tabs id="profileTab">
                    <Tab eventKey="personal" title="Personal Details">
                        <div className="ProfilePic">
                            <AuthorProfilePic />
                        </div>
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
                                    value={middleName}
                                    onChange={event => {
                                        setmiddleName(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#lastName">Last Name</label>
                                <FormInput
                                    id="#lastName"
                                    value={lastName}
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
                            <Button
                                theme="info"
                                onClick={() => {
                                    Axios.post('/author/update', {
                                        firstName,
                                        middleName,
                                        lastName,
                                        phNum,
                                        linkedInURL,
                                        twitterURL,
                                        qualification,
                                        biography
                                    }).then(res => {});
                                }}
                            >
                                Update
                            </Button>
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
                            <Button
                                theme="info"
                                onClick={() => {
                                    Axios.post('/author/update', {
                                        firstName,
                                        middleName,
                                        lastName,
                                        phNum,
                                        linkedInURL,
                                        twitterURL,
                                        qualification,
                                        biography
                                    }).then(res => {});
                                }}
                            >
                                Update
                            </Button>
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
                                    value={biography}
                                    onChange={event => {
                                        setBiography(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <Button
                                theme="info"
                                onClick={() => {
                                    Axios.post('/author/update', {
                                        firstName,
                                        middleName,
                                        lastName,
                                        phNum,
                                        linkedInURL,
                                        twitterURL,
                                        qualification,
                                        biography
                                    }).then(res => {});
                                }}
                            >
                                Update
                            </Button>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
