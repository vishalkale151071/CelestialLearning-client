import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {useHistory} from "react-router-dom"
import '../styles/CategoriesDropdwon.css'

export default function CategoriesDropdown() {
    const history = useHistory()
    const Clk = (cat) => {
        history.push(`/courses/${cat}`)
    };

    return (
        <div>
            <Dropdown   >
                <Dropdown.Toggle variant="inf" id="dropdown-basic">
                    <span style={{fontWeight : "bold" , }}>CATEGORIES</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className = 'dropdown1'>
                    <Dropdown.Item onClick={() => Clk('Development')} className = 'dropdown1list'>Development</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('Business')} className = 'dropdown1list' >Business</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('Finance & Accounting')} className = 'dropdown1list' >Finance & Accounting</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('IT & Software')} className = 'dropdown1list' >IT & Software</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('Marketing')} className = 'dropdown1list' >Marketing</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('Photography')} className = 'dropdown1list' >Photography</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
