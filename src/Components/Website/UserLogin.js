
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

function UserLogin({history}) {

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const dispatch = useDispatch()

     const userLogin = useSelector((state) => state.userLogin)
     const { loading, error, userInfo } = userLogin

     

     useEffect(() => {
     if (userInfo) {
          history.push('/')
     }
     }, [history, userInfo])

     const submitHandler = (e) => {
     e.preventDefault()
     dispatch(login(email, password))
     }    
     return (

          <form onSubmit = {submitHandler}>
               <input placeholder = "email" type = "text" onChange = {(e) => setEmail(e.target.value)}/><br />
               <input placeholder = "password" type = "password" onChange = {(e) => setPassword(e.target.value)}/><br />
               <button>Submit</button>
          </form>
   
     )
}

export default UserLogin
