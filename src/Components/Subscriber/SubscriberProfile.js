import React, { useState, useEffect } from 'react';
import SubscriberHeader from './SubscriberHeader';
import '../styles/UserProfile.css';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Button } from 'shards-react';
import { Tabs, Tab } from 'react-bootstrap';
import Axios from 'axios';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function SubscriberProfile({ history }) {
    const [url, setUrl] = useState('');
    const [imgStatus, setStatus] = useState('Upload Image');
    const [firstName, setfirstName] = useState('First Name');
    const [middleName, setmiddleName] = useState('Middle Name');
    const [lastName, setlastName] = useState('Last Name');
    const [phNum, setphNum] = useState('Phone Number');
    const [linkedInURL, setlinkedInURL] = useState('LinkedIn URL');
    const [twitterURL, settwitterURL] = useState('Twitter URL');
    const [higherEducation, sethigherEducation] = useState('Higher Education');
    const [areaOfInterest, setareaOfInterest] = useState('Area Of Interest');

    const ImageUpload = () => {
        const [file, setFile] = useState('');
        const [imagePreviewUrl, setImagePreview] = useState('');

        useEffect(() => {
            axios
                .post('/subscriber/profileImageView')
                .then(res => {
                    const ext = res.data.url.slice(-2);
                    if (ext === 'NA') {
                        setStatus('Upload Image');
                    } else {
                        setStatus('Update Image');
                    }
                    setImagePreview(res.data.url);

                })
                .catch(error => {
                    if (error.response.data.message === 'Unauthorised.') {
                        history.push('/subscriber/login');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: `${error.response.data.message}`
                        });
                    }
                });
        }, []);

        const _handleSubmit = e => {
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
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        text: `${res.data.message}`
                    });
                })
                .catch(error => {
                    if (error.response.data.message === 'Unauthorised.') {
                        history.push('/subscriber/login');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: `${error.response.data.message}`
                        });
                    }
                });
        };

        const _handleImageChange = e => {
            e.preventDefault();

            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
                setFile(file);
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        };

        return (
            <div>
                <form onSubmit={e => _handleSubmit(e)}>
                    <input className="ProfileImageInputButton" type="file" onChange={e => _handleImageChange(e)} />
                    <Button className="ProfileImageSubmitButton" type="submit" onClick={e => _handleSubmit(e)}>
                        {imgStatus}
                    </Button>
                </form>
                <div style={{ textAlign: 'center', height: '100px', width: '100px', border: '5px solid gray' }}>
                    {imagePreviewUrl ? (
                        <img style={{ width: '100%', height: '100%' }} src={imagePreviewUrl} />
                    ) : (
                        <div>Please select an Image for Preview</div>
                    )}
                </div>
            </div>
        );
    };

    useEffect(() => {
        Axios.post('/subscriber/profile')
            .then(res => {
                console.log('Response Invalid: ', res);
                setUrl(res.data.url);
                console.log('Project : ', res.data);
                const {
                    firstName,
                    middleName,
                    lastName,
                    phNum,
                    linkedInURL,
                    twitterURL,
                    higherEducation,
                    areaOfInterest
                } = res.data.profiledata;

                setfirstName(firstName);
                setmiddleName(middleName);
                setlastName(lastName);
                setphNum(phNum);
                setlinkedInURL(linkedInURL);
                settwitterURL(twitterURL);
                sethigherEducation(higherEducation);
                setareaOfInterest(areaOfInterest);
            })
            .catch(error => {
                if (error.response.data.message == 'Unauthorised.') {
                    history.push('/subscriber/login');
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: `${error.response.data.message}`
                    });
                }
            });
    }, []);

    return (
        <div>
            <SubscriberHeader history={history} />
            <div>
                <Tabs id="profileTab" className="profiletab">
                    <Tab eventKey="personal" title="Personal Details">
                        <div className="ProfilePic">
                            <ImageUpload />
                        </div>
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#firstName">First Name</label>
                                <FormInput id="#firstName" value={firstName} onChange={e => setfirstName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#middleName">Middle Name</label>
                                <FormInput id="#middleName" value={middleName} onChange={e => setmiddleName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#lastName">Last Name</label>
                                <FormInput id="#lastName" value={lastName} onChange={e => setlastName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#phNum">Phone Number</label>
                                <FormInput id="#phNum" value={phNum} onChange={e => setphNum(e.target.value)} />
                            </FormGroup>
                            <Button
                                theme="info"
                                onClick={() => {
                                    Axios.post('/subscriber/update', {
                                        firstName,
                                        middleName,
                                        lastName,
                                        phNum,
                                        linkedInURL,
                                        twitterURL,
                                        higherEducation,
                                        areaOfInterest
                                    })
                                        .then(res => {
                                            Swal.fire({
                                                icon: 'success',
                                                text: `${res.data.message}`
                                            });
                                        })
                                        .catch(error => {
                                            if (error.response.data.message === 'Unauthorised.') {
                                                history.push('/subscriber/login');
                                            } else {
                                                Swal.fire({
                                                    icon: 'error',
                                                    text: `${error.response.data.message}`
                                                });
                                            }
                                        });
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
                                <FormInput id="#linkedInURL" value={linkedInURL} onChange={e => setlinkedInURL(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#twitterURL">Twitter URL</label>
                                <FormInput id="#twitterURL" value={twitterURL} onChange={e => settwitterURL(e.target.value)} />
                            </FormGroup>
                            <Button
                                theme="info"
                                onClick={() => {
                                    Axios.post('/subscriber/update', {
                                        firstName,
                                        middleName,
                                        lastName,
                                        phNum,
                                        linkedInURL,
                                        twitterURL,
                                        higherEducation,
                                        areaOfInterest
                                    }).then(res => {
                                        Swal.fire({
                                        icon : 'success' ,
                                        text : `${res.data.message}`
                                        })
                                    }).catch(error => {
                                        if(error.response.data.message === "Unauthorised."){
                                            history.push('/subscriber/login');
                                        }
                                        else
                                        {
                                            Swal.fire({
                                                icon : 'error' ,
                                                text : `${error.response.data.message}`
                                            })
                                        }
                                    });;
                                }}
                            >
                                Update
                            </Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="education" title="Education">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#higherEducation">Higher Education</label>
                                <FormInput
                                    id="#higherEducation"
                                    value={higherEducation}
                                    onChange={e => sethigherEducation(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#areaOfInterest">Area of Interest</label>
                                <FormInput id="#areaOfInterest" value={areaOfInterest} onChange={e => setareaOfInterest(e.target.value)} />
                            </FormGroup>
                            <Button
                                theme="info"
                                onClick={() => {
                                    Axios.post('/subscriber/update', {
                                        firstName,
                                        middleName,
                                        lastName,
                                        phNum,
                                        linkedInURL,
                                        twitterURL,
                                        higherEducation,
                                        areaOfInterest
                                    }).then(res => {
                                        Swal.fire({
                                            icon : 'success' ,
                                            text : `${res.data.message}`
                                        })
                                    }).catch(error => {
                                        if(error.response.data.message === "Unauthorised."){
                                            history.push('/subscriber/login');
                                        }
                                        else
                                        {
                                            Swal.fire({
                                                icon : 'error' ,
                                                text : `${error.response.data.message}`
                                            })
                                        }
                                    });;
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
