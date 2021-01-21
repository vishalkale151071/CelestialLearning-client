import React from 'react';
import SubscriberHeader from '../Subscriber/SubscriberHeader';
import '../styles/CourseView.css';
import '../styles/video-react.css'; // import css
import HLSSource from '../Utils/HLSSource';
import { Player, ControlBar, ForwardControl, ReplayControl } from 'video-react';
import { Button } from 'shards-react';
import { Collapse } from 'antd';
import { Scrollbars } from 'rc-scrollbars';

export default function CourseView() {
    const { Panel } = Collapse;

    return (
        <div>
            <SubscriberHeader />
            <div className="vidPlayerdiv">
                <h1 className="crvTitle">Title</h1>

                {/* If you want to use MP4 file, give a src prop to Player tag and remove HLSSoure tag || If you want to play m3u8 file, keep the HLSSource tag just change the url */}
                <Player className="vidPlayer">
                    <HLSSource
                        isVideoChild
                        src="https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
                    />
                    <ControlBar className="ctrlbar" autoHide={true}>
                        <ReplayControl seconds={10} order={2.2} />
                        <ForwardControl seconds={10} order={3.2} />
                    </ControlBar>
                </Player>
            </div>
            <div  className="crvCollapse"> 
                <Scrollbars style={{ width: 525, height: 630 }}>
                    <Collapse>
                        <Panel header="Section 1" key="1">
                            <p>
                                <a href="#vid">Video1</a>
                            </p>
                            <p>
                                <a href="#vid">Video2</a>
                            </p>
                            <p>
                                <a href="#vid">Video3</a>
                            </p>
                        </Panel>
                        <Panel header="Section 2" key="2">
                            <p>
                                <a href="#vid">Video1</a>
                            </p>
                            <p>
                                <a href="#vid">Video2</a>
                            </p>
                            <p>
                                <a href="#vid">Video3</a>
                            </p>
                        </Panel>
                        <Panel header="Section 3" key="3">
                            <p>
                                <a href="#vid">Video1</a>
                            </p>
                            <p>
                                <a href="#vid">Video2</a>
                            </p>
                            <p>
                                <a href="#vid">Video3</a>
                            </p>
                        </Panel>
                        <Panel header="Section 4" key="4">
                            <p>
                                <a href="#vid">Video1</a>
                            </p>
                            <p>
                                <a href="#vid">Video2</a>
                            </p>
                            <p>
                                <a href="#vid">Video3</a>
                            </p>
                        </Panel>
                        <Panel header="Section 5" key="5">
                            <p>
                                <a href="#vid">Video1</a>
                            </p>
                            <p>
                                <a href="#vid">Video2</a>
                            </p>
                            <p>
                                <a href="#vid">Video3</a>
                            </p>
                        </Panel>
                    </Collapse>
                </Scrollbars>
            </div>
        </div>
    );
}
