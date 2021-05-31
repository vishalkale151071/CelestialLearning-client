import React from 'react';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/CL.png';
import { Button } from 'shards-react';
import { BsPersonSquare } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from 'shards-react';
import CategoriesDropdown from '../Utils/CategoriesDropdown';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import SearchList from '../Utils/SearchList';

export default function AdminHeader() {
    let history = useHistory();
    return (
        <div className="subscriberheader">
            <Navbar className="nav" expand="md">
                <NavbarBrand>
                    <img src={logo} width="90" heigh="90" onClick={() => history.push('/')} />
                </NavbarBrand>
                <NavbarToggler />

                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            
                        </NavItem>
                    </Nav>
                    
                </Collapse>
                <div className="right">
                    <Collapse navbar>
                        
                        <Dropdown>
                            <Dropdown.Toggle variant="inf" id="dropdown-basic">
                                <BsPersonSquare size="30" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            
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
                        <div className="right"></div>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}
