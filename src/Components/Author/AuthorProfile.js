import React, { useState, useEffect } from 'react';
import AuthorHeader from './AuthorHeader';
import '../styles/UserProfile.css';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Button } from 'shards-react';
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function AuthorProfile({history}) {
    const [imgStatus, setStatus] = useState('Upload Image');

    const [firstName, setfirstName] = useState('First Name');
    const [middleName, setmiddleName] = useState('Middle Name');
    const [lastName, setlastName] = useState('Last Name');
    const [phNum, setphNum] = useState('Phone Number');
    const [linkedInURL, setlinkedInURL] = useState('LinkedIn URL');
    const [twitterURL, settwitterURL] = useState('Twitter URL');
    const [qualification, setqualification] = useState('Qaulification');
    const [biography, setBiography] = useState('Biography ');

    useEffect(() => {
        axios.post('/author/profile').then(res => {
            
            setfirstName(res.data.profiledata.firstName);
            setmiddleName(res.data.profiledata.middleName);
            setlastName(res.data.profiledata.lastName);
            setphNum(res.data.profiledata.phNum);
            setlinkedInURL(res.data.profiledata.linkedInURL);
            settwitterURL(res.data.profiledata.twitterURL);
            setqualification(res.data.profiledata.qualification);
            setBiography(res.data.profiledata.biography);
        }).catch(error => {
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
    }, []);

    const ImageUpload = () => {
        const [file, setFile] = useState('');
        const [imagePreviewUrl, setImagePreview] = useState('');

        useEffect(() => {
            axios.post('/author/profileImageView').then(res => {
                const ext = res.data.url.slice(-2);
                if (ext === 'NA') {
                    setStatus('Upload Image');
                } else {
                    setStatus('Update Image');
                }
                setImagePreview(res.data.url);
            }).catch(error => {
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
        }, []);

        const _handleSubmit = e => {
            e.preventDefault();
            // TODO: do something with -> this.state.file
            console.log('handle uploading-', file);
            const formData = new FormData();
            formData.append('image', file);
            axios({
                method: 'post',
                url: '/author/profileImageUpdate',
                data: formData
            }).then(res=>{
                Swal.fire({
                    icon : 'success' ,
                    text : `${res.data.message}`
                })
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

    return (
        <div>
            <AuthorHeader history={history}/>
            <div className="profiletab">
                <Tabs id="profileTab">
                    <Tab eventKey="personal" title="Personal Details">
                        <div className="ProfilePic">
                            <ImageUpload />
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
                                    axios
                                        .post('/author/update', {
                                            firstName,
                                            middleName,
                                            lastName,
                                            phNum,
                                            linkedInURL,
                                            twitterURL,
                                            qualification,
                                            biography
                                        })
                                        .then(res => {
                                            Swal.fire({
                                                icon : 'success' ,
                                                text : `${res.data.message}`
                                            })
                                        }).catch(error => {
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
                                    axios
                                        .post('/author/update', {
                                            firstName,
                                            middleName,
                                            lastName,
                                            phNum,
                                            linkedInURL,
                                            twitterURL,
                                            qualification,
                                            biography
                                        })
                                        .then(res => {
                                            Swal.fire({
                                                icon : 'success' ,
                                                text : `${res.data.message}`
                                            })
                                        }).catch(error => {
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
                                    axios
                                        .post('/author/update', {
                                            firstName,
                                            middleName,
                                            lastName,
                                            phNum,
                                            linkedInURL,
                                            twitterURL,
                                            qualification,
                                            biography
                                        })
                                        .then(res => {
                                            Swal.fire({
                                                icon : 'success' ,
                                                text : `${res.data.message}`
                                            })
                                        }).catch(error => {
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
