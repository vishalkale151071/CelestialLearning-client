import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { Form, FormInput, FormGroup, Button } from 'shards-react';
import '../styles/CreateCourse.css';
import { Card, CardTitle, CardBody } from 'shards-react';
import { Image, Spinner } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Slider } from 'antd';
import axios from 'axios';
import { Upload } from 'antd';

import Swal from 'sweetalert2';

export default function CreateCourse() {
    let history = useHistory();
    const [courseId, setCourseId] = useState('');

    useEffect(() => {});

    const PreviewVedioUpload = () => {
        const [vedioFile, setVedioFile] = useState(null);
        const [loading, setLoading] = useState(false);
        function handelFileChange(e) {
            setVedioFile(e.target.files[0]);
        }
        function handleSubmit() {
            setLoading(true);

            const formData = new FormData();
            formData.append('image', vedioFile);

            formData.append('courseId', history.location.state.id); //Inserting course ID maunually
            axios({
                method: 'post',
                url: '/author/uploadPreview',

                data: formData
            })
                .then(res => {
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        text: `${res.data.message}`
                    });
                })

                .catch(error => {
                    if (error.response.data.message === 'Unauthorised.') {
                        history.push('/author/login');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: `${error.response.data.message}`
                        });
                    }
                });
        }

        return (
            <div>
                <input className="crcoPrch" type="file" onChange={e => handelFileChange(e)} />
                <br />
                <Button className="crcoPrup" onClick={handleSubmit} disabled={loading}>
                    {loading && <Spinner animation="border" variant="info" />}
                    Upload
                </Button>
            </div>
        );
    };

    const ImageUpload = () => {
        const [file, setFile] = useState('');
        const [imagePreviewUrl, setImagePreview] = useState('');
        const _handleSubmit = e => {
            e.preventDefault();
            console.log('handle uploading-', file);
            const formData = new FormData();
            formData.append('image', file);

            formData.append('courseId', history.location.state.id); // Inserting course Id manually
            axios({
                method: 'post',
                url: '/author/uploadThumbnail',

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
                        history.push('/author/login');
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
                    <input className="crcochbut" type="file" onChange={e => _handleImageChange(e)} />
                    <Button className="crcoUpbut" theme="success" type="submit" onClick={e => _handleSubmit(e)}>
                        Upload Image
                    </Button>
                </form>
                <div style={{ marginLeft: '15cm', textAlign: 'center', height: '100px', width: '100px', border: '5px solid gray' }}>
                    {imagePreviewUrl ? (
                        <img className="crcoimgpr" style={{ width: '100%', height: '100%' }} src={imagePreviewUrl} />
                    ) : (
                        <div>Please select an Image for Preview</div>
                    )}
                </div>
            </div>
        );
    };

    function Section({ sectionId }) {
        const [section, createSection] = useState(true);
        const [sectionName, setSectionName] = useState('');
        const [loading, setLoading] = useState(false);

        console.log('$$$$$$$$$$$$ Secid : ', sectionId);

        const [fields, setFields] = useState([{ lectureName: '', lectureFile: null }]);

        function handleAdd() {
            const values = [...fields];
            values.push({ lectureName: '', lectureFile: null });
            setFields(values);
        }

        function handleRemove(i) {
            const values = [...fields];
            values.splice(i, 1);
            setFields(values);
        }

        function handleNameChange(i, event) {
            const values = [...fields];
            values[i].lectureName = event.target.value;
            setFields(values);
        }
        function handleFileChange(i, event) {
            const values = [...fields];
            values[i].lectureFile = event.target.files[0];
            setFields(values);
        }

        function saveLecture(i) {
            const values = [...fields];
            setLoading(true);
            const formData = new FormData();
            formData.append('image', values[i].lectureFile);
            formData.append('vedioName', `${values[i].lectureName}`);
            formData.append('sectionId', `${sectionId}`);
            axios({
                method: 'post',
                url: '/author/add-video',
                data: formData
            })
                .then(res => {
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        text: `${res.data.message}`
                    });
                })
                .catch(error => {
                    if (error.response.data.message === 'Unauthorised.') {
                        history.push('/author/login');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: `${error.response.data.message}`
                        });
                    }
                });
        }

        return (
            <div>
                <Card className="CrCoCard">
                    <CardBody>
                        <CardTitle>
                            <h4>Section Name here</h4>
                        </CardTitle>
                        {fields.map((field, idx) => {
                            return (
                                <div key={`${field}-${idx}`}>
                                    <FormInput
                                        className="videoIp"
                                        type="text"
                                        placeholder="Enter Lecture Name and attach file"
                                        value={field.lectureName || ''}
                                        onChange={e => handleNameChange(idx, e)}
                                    />
                                    <FormInput
                                        className="videoIp"
                                        type="file"
                                        placeholder="Upload File"
                                        onChange={e => handleFileChange(idx, e)}
                                    />
                                    <Button theme="success" className="CrCoSaveLectureBut" type="button" onClick={() => saveLecture(idx)}>
                                        {loading && <Spinner animation="border" variant="info" />}
                                        Save Lecture
                                    </Button>
                                </div>
                            );
                        })}
                        <Button theme="success" className="CrCoAddLectureBut" type="button" onClick={() => handleAdd()}>
                            Add Lecture
                        </Button>
                        <Button
                            theme="success"
                            className="CrCoShowStateBut"
                            type="button"
                            onClick={() => {
                                console.log('Feilds : ', fields);
                            }}
                        >
                            Show State
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function SectionContainer() {
        //  const courseId = '60040cd8ca5848206b593c67'
        const [sections, setSections] = useState([{ sectionNumber: 0, sectionSaved: false, sectionName: '', sectionId: '' }]);
        const [sectionCount, setSectionCount] = useState(0);
        const [name, setName] = useState('');

        const saveSection = i => {
            setSectionCount(sectionCount + 1);
            axios
                .post('/author/create-section', {
                    number: sectionCount,
                    sectionName: name,
                    courseId: `${history.location.state.id}`
                    //courseId: '6006db170db0231310bd4728'
                })
                .then(res => {
                    const values = [...sections];
                    values[i].sectionNumber = sectionCount;
                    values[i].sectionSaved = true;
                    values[i].sectionName = name;
                    values[i].sectionId = `${res.data.sectionId}`;
                    setSections(values);
                })
                .catch(error => {
                    if (error.response.data.message === 'Unauthorised.') {
                        history.push('/author/login');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: `${error.response.data.message}`
                        });
                    }
                });
        };
        const addSection = () => {
            setName('');
            const values = [...sections];
            values.push({ sectionNumber: 0, sectionSaved: false, sectionName: '', sectionId: '' });
            setSections(values);
        };

        return (
            <div>
                {sections.map((section, idx) => {
                    return !section.sectionSaved ? (
                        <div>
                            <FormInput
                                className="videoIp"
                                type="text"
                                placeholder="Enter Section Name"
                                value={name || ''}
                                onChange={e => setName(e.target.value)}
                            />

                            <Button theme="success" className="CrCoSaveSecBut" type="button" onClick={() => saveSection(idx)}>
                                Save Section
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Section sectionId={section.sectionId} />
                        </div>
                    );
                })}
                <Button className="CrCoAddSectionBtn" theme="success" type="button" onClick={addSection}>
                    Add Section
                </Button>
            </div>
        );
    }

    const step1Content = (
        <div>
            <Card className="createcard" style={{ maxWidth: '1500px' }}>
                <CardBody>
                    <div className="step2">
                        <Form>
                            
                        </Form>
                    </div>
                    <SectionContainer />
                </CardBody>
            </Card>
        </div>
    );

    const step2Content = (
        <div>
            <Card className="createcard" style={{ maxWidth: '1500px' }}>
                <CardBody>
                    <div className="step2">
                        <div className="thumbnail">
                            <h3 className="titlethumbnail">Add a thumbnail and preview</h3>
                            <div className="thumbnailUpload">
                                <h4>Thumbnail</h4>
                                <ImageUpload />
                            </div>
                        </div>
                        <div className="previewUpload">
                            <h4 className="previewtext">Preview</h4>

                            <PreviewVedioUpload />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );

    const PriceUpload = () => {
        const [price, setPrice] = useState(0);
        const [coupon, setCoupon] = useState('');
        function submitHandler() {
            axios({
                method: 'post',
                url: '/author/priceUpload',
                price,
                coupon,
                courseId: history.location.state.id
            })
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        text: `${res.data.message}`
                    });
                })
                .catch(error => {
                    if (error.response.data.message === 'Unauthorised.') {
                        history.push('/author/login');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: `${error.response.data.message}`
                        });
                    }
                });
        }
        return (
            <Card className="createcard" style={{ maxWidth: '1500px' }}>
                <CardBody>
                    <div className="priceRange">
                        <label className="labelstep2" htmlFor="name">
                            What price would you like to set for your course?
                        </label>

                        <FormInput onChange={e => setPrice(e.target.value)} type="text"></FormInput>

                        <label className="labelstep2" htmlFor="name">
                            Would you like to add any coupons?:(Yes/No)
                        </label>

                        <FormInput type="text" onChange={e => setCoupon(e.target.value)}></FormInput>

                        <Button className="crcoUpbut" theme="success" type="submit" onClick={submitHandler}>
                            Upload
                        </Button>
                    </div>
                </CardBody>
            </Card>
        );
    };
    const step3Content = (
        <div>
            <PriceUpload />
        </div>
    );

    const step4Content = (
        <div>
            <Card className="createcard" style={{ maxWidth: '1500px' }}>
                <CardBody>
                    <div className="previewCourse">
                        <h3>Thats it !!! Click on submit for preview . Your course will be live !!</h3>
                    </div>
                </CardBody>
            </Card>
        </div>
    );

    function onFormSubmit() {
        history.push('/course/create');
    }

    return (
        <div>
            {/* <AuthorHeader /> */}
            <div className="createheader">
                <Button className="buttonexitc" theme="outline-danger" href="/author/dashboard">
                    Exit
                </Button>
                <div className="createheading">Let's Set-up your Course!</div>
                <Button className="buttonbackc" theme="outline-danger" href="/author/uploadcourse">
                    Back
                </Button>
            </div>
            <div className="ui divider"></div>
            <div className="stepbar">
                <StepProgressBar
                    startingStep={0}
                    onSubmit={onFormSubmit}
                    steps={[
                        {
                            label: 'Step 1',
                            name: 'step 1',
                            subtitle: 'Course Curiculam and Content',
                            content: step1Content
                            // validator: step1Validator
                        },
                        {
                            label: 'Step 2',
                            name: 'step 2',
                            subtitle: 'Course Preview and Thumbnail',
                            content: step2Content
                            // validator: step2Validator
                        },
                        {
                            label: 'Step 3',
                            name: 'step 3',
                            subtitle: 'Pricing and Coupons',
                            content: step3Content
                            // validator: step3Validator
                        },
                        {
                            label: 'Step 4',
                            name: 'step 4',
                            subtitle: 'Submit for Preview',
                            content: step4Content
                            // validator: step4Validator
                        }
                    ]}
                />
            </div>
        </div>
    );
}
