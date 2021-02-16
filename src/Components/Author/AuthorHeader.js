import React from 'react';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import logo from '../assets/CL.png';
import { Button } from 'shards-react';
import { BsPersonSquare } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import CategoriesDropdown from '../Utils/CategoriesDropdown';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from 'shards-react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

export default function AuthorHeader() {
    const history = useHistory();
    return (
        <div className="authorheader">
            <Navbar className="nav" expand="md">
                <NavbarBrand>
                    <img src={logo} width="90" heigh="90" alt="logo" />
                </NavbarBrand>
                <NavbarToggler />

                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            <CategoriesDropdown />
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <InputGroup size="sm" seamless className="headersearch">
                            <InputGroupAddon type="prepend">
                                <InputGroupText></InputGroupText>
                            </InputGroupAddon>
                            <FormInput className="border-0" placeholder="Search..." />
                        </InputGroup>
                    </Nav>
                </Collapse>
                <Button theme="outline-danger" href="/author/uploadcourse">
                    Create Course
                </Button>
                <div className="right">
                    <Dropdown>
                        <Dropdown.Toggle variant="inf" id="dropdown-basic">
                            <BsPersonSquare size="30" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/author/profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="/author/settings">Account Settings</Dropdown.Item>
                            <Dropdown.Item href="/author/mycourses">My Courses</Dropdown.Item>
                            <Dropdown.Divider />
                            <Button
                                className="logoutbutton"
                                theme="outline-danger"
                                onClick={() => {
                                    axios
                                        .post('/logout')
                                        .then(res => {
                                            console.log(res.data.message);
                                            Cookies.remove('u');
                                            history.push('/');
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        });
                                }}
                            >
                                Logout
                            </Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Navbar>
        </div>
    );
}
