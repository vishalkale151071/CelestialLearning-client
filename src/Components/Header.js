import React from 'react'
import './styles/Header.css'
import logo from './assets/logo.png'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";

function Header() {
     const history = useHistory();

  function subHandleClick() {
    history.push("/subscriber/login");
  }
  const authHandleClick = () => {
       history.push("/author/login") ;
  }
     return (
          <div className = "header">
               
               <div className = "header_logo" >
                    <img src={logo} style = {{width : "40%" , height : "40%" }}    />
               </div>
               <div className = "header_title">
                    <h2>Celestial Learning</h2>
               </div>
               <div className = "header_input" >
                    <input type="text" />
               </div> 
                    
               <div className = 'icon'>
                    <Button variant="contained" color="primary"  onClick={authHandleClick}>
                         Instructor LogIn
                    </Button>

               </div>
               <div className = 'icon'>
                    <Button variant="contained" color="primary" onClick={subHandleClick}>
                         Student Login
                    </Button>
                         
               </div>
               <div className = 'icon'>
                    <ShoppingBasketIcon fontSize="large" />
                    
               </div>

          
               
          </div>
     )
}

export default Header
