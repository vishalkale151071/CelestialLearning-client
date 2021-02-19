import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/CL.png';
import { Button } from 'shards-react';
import CategoriesDropdown from './CategoriesDropdown';
import Axios from 'axios'
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
import Search from '@material-ui/icons/Search';

export var type = "";

export const Header = () => {
    const history = useHistory();

    function loginHandleClick() {
        history.push('/subscriber/login');
    }
    const signupHandleClick = () => {
        history.push('/subscriber/signup');
    };
    async function search(key)
    {
        //console.warn(key);
        if(key)
        {
            Axios.get('http://localhost:5000/home/search?param='+key).then(res=>{
            console.log(res.data.resultData);   
            })
        }
        
    }
    return (
        <Navbar className="nav" expand="md">
            <NavbarBrand>
                <img src={logo} width='60' heigh='40' />
            </NavbarBrand>
            <NavbarToggler />

            <Collapse navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink><CategoriesDropdown /></NavLink>
                    </NavItem>
                </Nav>

                <Nav navbar >
                    <InputGroup size="sm" seamless className="headersearch" >
                        <InputGroupAddon  type="prepend">
                            <InputGroupText>
                                <SearchIcon />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput className="border-0" placeholder="Search..." onChange = {(e)=> search(e.target.value)} />
                    </InputGroup>
                </Nav>

                
                
            </Collapse>
            <div className="right">
                    <Button outline theme="info" onClick={loginHandleClick}>
                        LogIn
                       

                    </Button>
                    <Button className="signupButton" outline theme="info" onClick={signupHandleClick}>
                        SignUp
                    </Button>
                </div>
        </Navbar>
    );
};

export default Header;