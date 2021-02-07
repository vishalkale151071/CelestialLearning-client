import React, { useEffect, useState } from 'react';
import SubscriberHeader from '../Subscriber/SubscriberHeader';
import '../styles/CourseView.css';
import '../styles/video-react.css'; // import css
import HLSSource from '../Utils/HLSSource';
import { Player, ControlBar, ForwardControl, ReplayControl } from 'video-react';
import { Button } from 'shards-react';
import { Collapse } from 'antd';
import { Scrollbars } from 'rc-scrollbars';
import axios from 'axios'

export default function CourseView({history}) {

    const [sections , setSections] = useState([])
    const [playerUrl , setUrl] = useState('')
    
    useEffect(() => {
        axios.post('/author/course/sections' , {
            courseId : "6016bca4b217f3151fff05cb"

        }).then(res => {
            res.data.sections.forEach((value , index) => {
                setSections(oldArray => [...oldArray, {sectionName : value.sectionName , sectionVedios : value.video}])
            })
        })
    } , [])

    const Section = ({section}) => {
        const { Panel } = Collapse;

        return(
            
            <Collapse>
                 <Panel header = {section.sectionName} >
                {
                    section.sectionVedios.map(vedio => 
                    <button key = {vedio.videoName} onClick = {() => {
                        setUrl(`${vedio.videoURL}`)
                        console.log("url : " , playerUrl)
                        }}>
                        {vedio.videoName}
                    </button>
                    
                    )
                }
                </Panel>
            </Collapse>
        )
    }   
    return (
        <div>
            <SubscriberHeader history={history} />
            <div className="vidPlayerdiv">
                <h1 className="crvTitle">Title</h1>

                {/* If you want to use MP4 file, give a src prop to Player tag and remove HLSSoure tag || If you want to play m3u8 file, keep the HLSSource tag just change the url */}
                <Player className="vidPlayer"
                    src = {playerUrl}
                >
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
            <div  className="crvCollapse"> 
                <Scrollbars style={{ width: 525, height: 630 }}>
                    {
                        sections.map(section => <Section section = {section} key={section.sectionName}/>) 
                    } 
                    
                </Scrollbars>
            </div>
        </div>
    );
}