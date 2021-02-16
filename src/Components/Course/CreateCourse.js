import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { Form, FormInput, FormGroup, Button } from 'shards-react';
import '../styles/CreateCourse.css';
import { Card, CardTitle, CardBody } from 'shards-react';
import { Image } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Slider } from 'antd';
import axios from 'axios';
import { Upload } from 'antd';

import Swal from 'sweetalert2'

export default function CreateCourse() {
    let history = useHistory();
    const [courseId, setCourseId] = useState('');
    
    useEffect(() => {});


    const PreviewVedioUpload = () => {
        const [vedioFile, setVedioFile] = useState(null);
        function handelFileChange(e) {
            setVedioFile(e.target.files[0]);
        }
        function handleSubmit() {
            const formData = new FormData();
            formData.append('image', vedioFile);

            formData.append('courseId', history.location.state.id); //Inserting course ID maunually    
            axios({
                method: 'post',
                url: '/author/uploadPreview',

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
            })
        }
        return (
            <div>
                <input type="file" onChange={e => handelFileChange(e)} />
                <br />
                <button onClick={handleSubmit}>Upload</button>
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


            formData.append('courseId' , history.location.state.id ) // Inserting course Id manually 
            axios({
                method: 'post',
                url: '/author/uploadThumbnail',

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
            })
        }


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
                    <input type="file" onChange={e => _handleImageChange(e)} />
                    <button type="submit" onClick={e => _handleSubmit(e)}>
                        Upload Image
                    </button>
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

    // Course Thumbnail
    const CourseThumbnail = () => {
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

    // Preview Video
    const previewprops = {
        name: 'file',
        action: 'author/uploadThumbnailPreview',
        headers: {
            authorization: 'authorization-text'
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
                console.log('error ; ', info);
            }
        }
    };

    // Price Slider
    class PriceSlider extends React.Component {
        state = {
            disabled: false
        };

        handleDisabledChange = disabled => {
            this.setState({ disabled });
        };

        render() {
            const { disabled } = this.state;
            return (
                <>
                    <Slider min={500} max={5000} range defaultValue={[700, 1500]} disabled={disabled} />
                </>
            );
        }
    }

    function Section({ sectionId }) {
        const [section, createSection] = useState(true);
        const [sectionName, setSectionName] = useState('');

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
            const formData = new FormData();
            formData.append('image', values[i].lectureFile);
            formData.append('vedioName', `${values[i].lectureName}`);
            formData.append('sectionId', `${sectionId}`);
            axios({
                method: 'post',
                url: '/author/add-video',
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
                            <label className="labelstep2" htmlFor="name">
                                Section Name:
                            </label>
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
                        Add a thumbnail and preview
                        <div className="thumbnailUpload">
                            <h4>Thumbnail</h4>
                            <ImageUpload />
                        </div>
                        <div className="previewUpload">
                            <h4>Preview</h4>

                            <PreviewVedioUpload />
                        </div>
                        <Form>
                            <FormGroup></FormGroup>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </div>
    );

    const step3Content = (
        <div>
            <Card className="createcard" style={{ maxWidth: '1500px' }}>
                <CardBody>
                    <div className="priceRange">
                        What price range would to like to set for your course
                        <PriceSlider />
                    </div>
                    <Form>
                        <label className="labelstep2" htmlFor="name">
                            Would you like to add any coupons?:
                        </label>
                        <FormGroup>
                            <FormInput type="text"></FormInput>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );

    const step4Content = (
        <div>
            <Card className="createcard" style={{ maxWidth: '1500px' }}>
                <CardBody>
                    <div className="previewCourse">Please Confirm all the data before submitting your course for preview</div>
                </CardBody>
            </Card>
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
