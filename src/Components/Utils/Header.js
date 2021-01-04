import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/logo2.svg';
import { Button } from 'shards-react';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from 'shards-react';

export const Header = () => {
    const history = useHistory();

    function loginHandleClick() {
        history.push('/subscriber/login');
    }
    const signupHandleClick = () => {
        history.push('/subscriber/signup');
    };
    return (
        <Navbar className="nav" expand="md">
            <NavbarBrand>
                <img src={logo} />
            </NavbarBrand>
            <NavbarToggler />

            <Collapse navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink>Categories</NavLink>
                    </NavItem>
                </Nav>

                <Nav navbar className="ml-auto">
                    <InputGroup size="sm" seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <SearchIcon />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput className="border-0" placeholder="Search..." />
                    </InputGroup>
                </Nav>

                <div className="right">
                    <ShoppingCartIcon fontSize="large" />
                </div>
                <div className="right">
                    <Button outline theme="danger" onClick={loginHandleClick}>
                        LogIn
                    </Button>
                </div>
                <Button outline theme="danger" onClick={signupHandleClick}>
                    SignUp
                </Button>
                <div className="right"></div>
            </Collapse>
        </Navbar>
    );
};

export default Header;
