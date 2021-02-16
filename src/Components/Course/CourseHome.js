import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/CourseHome.css';
import { useParams } from 'react-router';
import Header from '../Utils/Header';
import { Card, CardTitle, CardBody, CardFooter, CardImg, Button, Container, Row, Col } from 'shards-react';
import razorpayLogo from '../assets/razorpay.png';
import Footer1 from '../Utils/Footer';
import { Collapse } from 'antd';
import HLSSource from '../Utils/HLSSource';
import Axios from 'axios';
import { Scrollbars } from 'rc-scrollbars';
import { Player, ControlBar, ForwardControl, ReplayControl } from 'video-react';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import SubscriberHeader from '../Subscriber/SubscriberHeader';
import AuthorHeader from "../Author/AuthorHeader"

function loadScript(src) {
    return new Promise(resolve => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
const __DEV__ = document.domain === 'localhost';
export default function CourseHome({ history }) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [suitableFor, setSuitableFor] = useState('');
    const [description, setDescription] = useState('');
    const [prerequisite, setPrerequisite] = useState([]);
    const [authorName, setAuthorName] = useState('');
    const [category, setCategory] = useState('');
    const [courseThumbnail, setCourseThumbnail] = useState('');
    const [coursePreview, setCoursePreview] = useState('');
    const [sectionData, setSections] = useState([]);

    let { courseTitle } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        Axios.post('/course/details', {
            courseTitle: courseTitle
        }).then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setSuitableFor(res.data.suitableFor);
            setDescription(res.data.description);
            setPrerequisite(res.data.prerequisite);
            setAuthorName(res.data.authorName);
            setCategory(res.data.category);
            setCourseThumbnail(res.data.courseThumbnail);
            setCoursePreview(res.data.coursePreview);
            res.data.sectionData.forEach((value, index) => {
                setSections(oldArray => [...oldArray, { sectionName: value.sectionName, sectionNumber: value.sectionNumber }]);
            });
        });
    }, []);

    const { Panel } = Collapse;
    let itemList = [];

    function Headerfunc() {
        if (Cookies.get('u') === 's') {
            return <SubscriberHeader />;
        } else if (Cookies.get('u') === 'a') {
            return <AuthorHeader />;
        } else {
            return <Header />;
        }
    }

    prerequisite.map((item, index) => {
        itemList.push(<li key={index}>{item}</li>);
    });

    const Section = ({ section }) => {
        const { Panel } = Collapse;

        return (
            <Collapse>
                <Panel header={section.sectionName} key={section.sectionNumber}>
                    {}
                </Panel>
            </Collapse>
        );
    };
    async function DisplayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        Axios.post('/payment/process', {
            price,
            courseTitle
        })
            .then(res => {
                console.log(res.data);
                const options = {
                    key: __DEV__ ? 'rzp_test_3LqDzu8J6aTI9F' : 'PRODUCTION_KEY',
                    currency: res.data.currency, //data.currency,
                    amount: res.data.price,
                    order_id: res.data.id, //data.id,
                    name: `Payment for course ${title}`,
                    description: `Course buy`,
                    image: razorpayLogo

                    // handler: function (response) {
                    //     alert(response.razorpay_payment_id)
                    //     alert(response.razorpay_order_id)
                    //     alert(response.razorpay_signature)
                    // },
                    // prefill: {
                    //     name : res.data.name,
                    //     email: res.data.email,
                    //     contact: res.data.contact
                    // }
                };
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            })
            .catch(error => {
                if (error.response.data.message === 'Unauthorised.') {
                    Swal.fire({
                        icon: 'error',
                        text: `Your session has been expired. Kindly login again to continue.`
                    });
                    history.push('/subscriber/login');
                }
            });
    }
    return (
        <div>
            <Headerfunc />
            <div className="topCard">
                <Card className="tpCard" style={{ maxWidth: '1800px' }}>
                    <CardImg className="crdImg" src={courseThumbnail} />
                    <CardBody>
                        <CardTitle className="crhmCT">{title}</CardTitle>
                        <div className="SmallDesc">
                            <p>
                                <h6>Price: {price}</h6>
                            </p>
                            <p>Author: {authorName}</p>
                            <p>Category: {category}</p>
                            <p>Language: English</p>
                        </div>

                        <Button className="WishlistButton" onClick={DisplayRazorpay}>
                            Buy Now
                        </Button>
                        <Button className="ShareButton">Share</Button>
                    </CardBody>
                </Card>
                <div>
                    <Card className="tpCard1" style={{ maxWidth: '1800px' }}>
                        <CardBody>
                            <div className="TextDescription">
                                <h2>Description:</h2>
                                {description}
                                <div className="TextSuitableFor">
                                    <h3>Suitable For:</h3>
                                    {suitableFor}
                                </div>
                            </div>
                            <h2 className="H2Heading">Course Preview:</h2>
                            <div className="CRHMVidPlayerDiv">
                                <Player className="CRHMvidPlayer" src={coursePreview}>
                                    {/* <HLSSource
                                        isVideoChild
                                        src="https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
                                    /> */}
                                    <ControlBar className="ctrlbar" autoHide={true}>
                                        <ReplayControl seconds={10} order={2.2} />
                                        <ForwardControl seconds={10} order={3.2} />
                                    </ControlBar>
                                </Player>
                            </div>
                            <h2 className="H2Heading">What You'll Learn:</h2>

                            <div className="TextWhatLearn">
                                <Container>
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>Spf/Dmarc</li>
                                                <li>Cookie Issues</li>
                                                <li>XSS</li>
                                                <li>SQLi</li>
                                            </ul>
                                        </Col>

                                        <Col>
                                            <ul>
                                                <li>IDOR</li>
                                                <li>Authentication Bypass</li>
                                                <li>Rate Limiting</li>
                                                <li>RCE</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <h2 className="H2Heading">PreRequisites:</h2>
                            <div className="PrereqText">{itemList}</div>
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Card>
                </div>
                <h3 className="ContentsHeading">Contents</h3>
                <Collapse className="CoHoCollaps">
                    <Scrollbars style={{ width: 525, height: 630 }}>
                        {sectionData.map(section => (
                            <Section section={section} key={section.sectionName} />
                        ))}
                    </Scrollbars>
                </Collapse> 
            </div>

            <div>
                <Footer1 />
            </div>
        </div>
    );
}
