import React from 'react'
import Header_auth from "../Utils/Header_auth"
import {Tabs,Tab } from "react-bootstrap"
import { Form, FormInput, FormGroup } from 'shards-react';
import { Button } from 'shards-react';

export default function subscriberSettings() {
    return (
        <div>
            <Header_auth />
            <div className="profiletab">
                <Tabs  id="settingtab">
                    <Tab eventKey="personal" title="Email">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#email">Email</label>
                                <FormInput id="#email"  />
                            </FormGroup>
                            <Button theme="info">Update</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="social" title="Password">
                        <Form className="subform">
                            <FormGroup>
                                <label htmlFor="#oldopassword">Old Password</label>
                                <FormInput id="#oldopassword"  />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#newpassword">New Password</label>
                                <FormInput id="#newpassword"  />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#confirmnewpasword">Confirm New Password</label>
                                <FormInput id="#confirmnewpasword"  />
                            </FormGroup>
                            <Button theme="info">Update</Button>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
