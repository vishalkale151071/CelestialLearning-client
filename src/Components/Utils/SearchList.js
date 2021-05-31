import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Typography, Divider } from 'antd';
import '../styles/Search.css';
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
    Collapse,
    Button
} from 'shards-react';
import SearchIcon from '@material-ui/icons/Search';
import Search from '@material-ui/icons/Search';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

var data = [];
var dataa = [];

export default function SearchList() {
    var history = useHistory();
    var slist = [];
    const [searchList, setSearchList] = useState([]);
    const [searchKey, setsearchKey] = useState('')
    const Go = item => {
        console.log('GO:', item);
        history.push(`/course/${item}`);
    };
    function SrchLst() {
        if (searchKey.length > 0) {
            return (
                <div>
                    <List
                        onClick={() => Go}
                        bordered
                        dataSource={data}
                        renderItem={item => (
                            <List.Item >
                                <List.Item.Meta title={<a onClick={() => Go(item)}>{item}</a>} />
                            </List.Item>
                        )}
                    />
                </div>
            );
        }         
        else {
            return <div></div>;
        }
    }

    async function search(key) {
        //console.warn(key);
        setsearchKey(key)
        data = [];
        
        if (key) {
            Axios.get('http://localhost:5000/home/search?param=' + key).then(res => {
                dataa = res.data.resultData;
                for (var i = 0; i < dataa.length; i++) {
                    data.push(dataa[i].courseName);
                }
                setSearchList(data);
                console.log(data);
            });
        }
    }
    return (
        <div className="SearchResult">
            <InputGroup size="sm" seamless className="headersearch">
                <InputGroupAddon type="prepend">
                    <InputGroupText>
                        <SearchIcon />
                    </InputGroupText>
                </InputGroupAddon>
                <FormInput className="border-0" placeholder="Search..." onChange={e => search(e.target.value)} />
            </InputGroup>
            <SrchLst />
        </div>
    );
}
