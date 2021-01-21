import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function CategoriesDropdown() {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="inf" id="dropdown-basic">
                    Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#Development">Development</Dropdown.Item>
                    <Dropdown.Item href="#Business">Business</Dropdown.Item>
                    <Dropdown.Item href="#Finance&Accounting">Finance & Accounting</Dropdown.Item>
                    <Dropdown.Item href="#IT&Software">IT & Software</Dropdown.Item>
                    <Dropdown.Item href="#Marketing">Marketing</Dropdown.Item>
                    <Dropdown.Item href="Photography">Photography</Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
