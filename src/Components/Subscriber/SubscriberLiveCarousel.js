import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import '../styles/CarouselDemo.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Axios from 'axios';
import Zoom from '../LiveSession/Zoom';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const SubscriberLiveCarousel = () => {
    const history = useHistory();
    const [liveSession, setLive] = useState([]);
    const [joinMeeting, setJoinMeeting] = useState(false);
    const [meetingName,setMeetingName] = useState("");
    const [meetingId,setMeetingId] = useState(0);
    const [password,setPassword] = useState("")
    
    useEffect(async () => {
        await Axios.post('/subscriber/getMeeting')
            .then(res => {
                
                setLive(res.data.message)
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
    
    const submitHandler = (meetingId,password) => {
       
        setMeetingId(meetingId)
        setPassword(password)
        setJoinMeeting(true)
       
    }
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = liveSession => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        {/* <div className="CCimg">
                            <img
                                src={Live.courseThumbnail}
                                onError={e => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                                alt="error"
                                className="product-image"
                            />
                        </div> */}
                    </div>
                    <div>
                        <div className="CCtitle">
                            <h4 className="p-mb-1">{liveSession.meetingName}</h4>
                        </div>
                        <h6 className="p-mt-0 p-mb-3">{liveSession.meetingId}</h6>
                        <h6 className="p-mt-0 p-mb-3">{liveSession.courseName}</h6>
                        <h6 className="p-mt-0 p-mb-3">{liveSession.password}</h6>
                        <div className="car-buttons p-mt-5">
                            {/* <Button
                                icon="pi pi-play"
                                onClick={() => submit(Live.courseName)}
                                className="p-button p-button-rounded p-mr-2"
                            /> */}
                            <Button icon="pi pi-video" className="p-button-success p-button-rounded p-mr-2" onClick={() => submitHandler(liveSession.meetingId,liveSession.password) } />
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div>
            {joinMeeting ? (
                <Zoom title = {meetingId} password = {password}/>
            ) : (
                
            <div>
                <div className="CourseCorousel">
                    <div className="carousel-demo">
                        <div className="card">
                            <Carousel
                                value={liveSession}
                                numVisible={5}
                                numScroll={5}
                                responsiveOptions={responsiveOptions}
                                itemTemplate={productTemplate}
                                header={<h5 className="CCHeader">Live Sessions</h5>}
                            />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default SubscriberLiveCarousel;
