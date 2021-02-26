import React, { useEffect, useState } from 'react';
import SubscriberHeader from '../Subscriber/SubscriberHeader';
import { useHistory } from 'react-router-dom';
import '../styles/CourseView.css';
import '../styles/video-react.css'; // import css
import HLSSource from '../Utils/HLSSource';
import { Player, ControlBar, ForwardControl, ReplayControl } from 'video-react';
import { Collapse } from 'antd';
import { Scrollbars } from 'rc-scrollbars';
import { useParams } from "react-router";
import axios from 'axios';
import Swal from 'sweetalert2';
import VideoPlayer from '../Utils/VideoPlyar';

export default function CourseView() {
    let history = useHistory();
    const [sections, setSections] = useState([]);
    const [playerUrl, setUrl] = useState('');
    const { title } = useParams();

    useEffect(() => {
         axios
            .post('/author/course/sections', {
                title
            })
            .then(res => {
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
    },[]);
    console.log(sections);
    const Section = ({ section }) => {
        const { Panel } = Collapse;
        
        return (
            <Collapse>
                <Panel header={section.sectionName}>
                    {section.sectionVedios.map(vedio => (
                        <button
                            key={vedio.videoName}
                            onClick={() => {
                                setUrl(`${vedio.videoURL}`);
                            }}
                        >
                            {vedio.videoName}
                        </button>
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
                <VideoPlayer poster="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg">

                </VideoPlayer>
            </div>
            <div className="crvCollapse">
                <Collapse className="CoHoCollaps">
                    <Scrollbars style={{ width: 525, height: 630 }}>
                        {sections.map(section => (
                            <Section section={section} key={section.sectionName} />
                        ))}
                    </Scrollbars>
                </Collapse> 
            </div>
        </div>
    );
}
