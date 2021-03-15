import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {useHistory} from "react-router-dom"

export default function CategoriesDropdown() {
    const history = useHistory()
    const Clk = (cat) => {
        history.push(`/courses/${cat}`)
    };

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="inf" id="dropdown-basic">
                    Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => Clk('Development')}>Development</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('Business')}>Business</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('Finance & Accounting')}>Finance & Accounting</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('IT & Software')}>IT & Software</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('Marketing')}>Marketing</Dropdown.Item>
                    <Dropdown.Item onClick={() => Clk('Photography')}>Photography</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
