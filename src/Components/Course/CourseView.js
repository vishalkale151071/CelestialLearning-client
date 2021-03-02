import React, { useEffect, useState, useRef } from 'react';
import SubscriberHeader from '../Subscriber/SubscriberHeader';
import { useHistory } from 'react-router-dom';
import '../styles/CourseView.css';
import '../styles/video-react.css'; // import css
import HLSSource from '../Utils/HLSSource';
import { Player, ControlBar, ForwardControl, ReplayControl, BigPlayButton } from 'video-react';
import { Collapse, Button } from 'antd';
import { Scrollbars } from 'rc-scrollbars';
import { useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function CourseView() {
    let history = useHistory();
    const [sections, setSections] = useState([]);
    const [playerUrl, setUrl] = useState('');
    const playerInput = useRef(null)
    const { title } = useParams();
    
    const getTime = () =>{
        console.log("Current Tme:",playerInput.current.video.props.player.currentTime) //.current.video.props.player.currentTime
    }
    
    useEffect(() => {
        axios
            .post('/author/course/sections', {
                title
            })
            .then(res => {
                console.log(res.data.sectionData);
                res.data.sectionData.forEach((value, index) => {
                    setSections(oldArray => [...oldArray, { sectionName: value.sectionName, sectionVedios: value.video }]);
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
    }, []);
    console.log(sections);
    const Section = ({ section }) => {
        const { Panel } = Collapse;

        return (
            <Collapse className="CrvCollpse">
                <Panel header={section.sectionName} className="CrVPanel">
                    {section.sectionVedios.map(vedio => (
                        <p><Button
                            key={vedio.videoName}
                            onClick={() => {
                                setUrl(`${vedio.videoURL}`);
                                console.log(playerUrl)
                            }}
                        >
                            {vedio.videoName}
                        </Button></p>
                    ))}
                </Panel>
            </Collapse>
        );
    };
    return (
        <div>
            <SubscriberHeader history={history} />
            <div className="vidPlayerdiv">
                <h1 className="crvTitle">Title</h1>

                {/* If you want to use MP4 file, give a src prop to Player tag and remove HLSSoure tag || If you want to play m3u8 file, keep the HLSSource tag just change the url */}
                <Player  className="vidPlayer" src={playerUrl} ref={playerInput}>
                    {/* <HLSSource
                        isVideoChild
                        
                    /> */}
                          <BigPlayButton position="center" />

                    <ControlBar className="ctrlbar" autoHide={true}>
                        <ReplayControl seconds={10} order={2.2} />
                        <ForwardControl seconds={10} order={3.2} />
                    </ControlBar>
                </Player>
                <Button className="crvbutgt" onClick={getTime}>Get Current Time</Button>

            </div>
            <div className="crvCollapse">
                <Scrollbars style={{ width: 525, height: 630 }}>
                    {sections.map(section => (
                        <Section section={section} key={section.sectionName} />
                    ))}
                </Scrollbars>
            </div>
        </div>
    );
}
