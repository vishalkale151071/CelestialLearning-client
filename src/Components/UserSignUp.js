import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { register } from '../actions/userActions' 
function UserSignUp({history}) {

     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')

     
     const dispatch = useDispatch()

     const userRegister = useSelector((state) => state.userRegister)
     const { loading, error } = userRegister

     const userLogin = useSelector((state) => state.userLogin)
     const { userInfo } = userLogin

     useEffect(() => {
          if (userInfo) {
            history.push('/')
          }
          
        }, [history,userInfo])


     const submitHandler = (e) => {
          e.preventDefault()
          if (password !== confirmPassword) {
            console.log('Passwords do not match')
          } else {
            dispatch(register(name, email, password))
            console.log(`Activation Link Sent to ${email}`)
            setName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            
          }
        }

     return (
          <form onSubmit = {submitHandler}>
               <input placeholder = "Name" type = "text" onChange = {(e) => setName(e.target.value)}/><br />
               <input placeholder = "Email" type = "text" onChange = {(e) => setEmail(e.target.value)}/><br />
               <input placeholder = "Password" type = "password" onChange = {(e) => setPassword(e.target.value)}/><br />
               <input placeholder = "Confirm Passowrd" type = "password" onChange = {(e) => setConfirmPassword(e.target.value)}/><br />
               <button>Submit</button>
          </form>
     )
}

export default UserSignUp
