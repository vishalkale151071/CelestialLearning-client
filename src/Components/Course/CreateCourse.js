import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { Form, FormInput, FormGroup, FormTextarea, Button } from 'shards-react';
import '../styles/CreateCourse.css';
import { Card, CardTitle, CardImg, CardBody } from 'shards-react';
import { Image } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import { Slider, Switch } from 'antd';

export default function CreateCourse() {
    let history = useHistory();

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
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
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

    // Section and Video Inputs
    function SecIp() {
        const [section, setFields] = useState([{ value: null }]);
        console.log(section);
        function handleChange(i, event) {
            const values = [...section];
            values[i].value = event.target.value;
            setFields(values);
        }

        function handleAdd() {
            const values = [...section];
            values.push({ value: null });
            setFields(values);
        }

        function handleRemove(i) {
            const values = [...section];
            values.splice(i, 1);
            setFields(values);
        }

        return (
            <div className="App">
                {section.map((field, idx) => {
                    return (
                        <div className="sectionForm" key={`${field}-${idx}`}>
                            <Card className="sectionCard" style={{ maxWidth: '600px' }}>
                                <CardBody>

                                   
                                    <FormInput
                                        className="sectionIp"
                                        type="text"
                                        placeholder="Enter Section Name"
                                        value={field.value || ''}
                                        onChange={e => handleChange(idx, e)}
                                    />
                                    <VidIp />
                                    <Button theme="danger" className="secdelbut" type="button" onClick={() => handleRemove(idx)}>
                                        Del Sec
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    );
                })}
                <Button theme="success" className="secaddbut" type="button" onClick={() => handleAdd()}>
                    Add Sec
                </Button>
            </div>
        );
    }

    // Video IP
    function VidIp() {
        const [fields, setFields] = useState([{ value: null }]);
        console.log(fields);
        function handleChange(i, event) {
            const values = [...fields];
            values[i].value = event.target.value;
            setFields(values);
        }

        function handleAdd() {
            const values = [...fields];
            values.push({ value: null });
            setFields(values);
        }

        function handleRemove(i) {
            const values = [...fields];
            values.splice(i, 1);
            setFields(values);
        }

        return (
            <div className="App">
                {fields.map((field, idx) => {
                    return (
                        <div key={`${field}-${idx}`}>
                            <FormInput
                                className="videoIp"
                                type="text"
                                placeholder="Enter Video Name"
                                value={field.value || ''}
                                onChange={e => handleChange(idx, e)}
                            />
                            <Button theme="danger" className="viddelbut" type="button" onClick={() => handleRemove(idx)}>
                                Del Vid
                            </Button>
                        </div>
                    );
                })}
                <Button theme="success" className="vidaddbut" type="button" onClick={() => handleAdd()}>
                    Add Vid
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
                    <SecIp />
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
                            <CourseThumbnail />
                        </div>
                        <div className="previewUpload">
                            <h4>Preview</h4>
                            <Upload {...previewprops}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
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
