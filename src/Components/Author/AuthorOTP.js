import React, {useState} from 'react';
import { Form, FormInput } from 'shards-react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';
import Axios from 'axios';
import { Button } from 'antd';
function AuthorOTP({ match, history }) {
    
    const [otp,setOTP] = useState(0);
    const { id } = useParams();

    const submitHandler = e => {
        e.preventDefault();
        Axios.post("/admin/otpverify",{
            authorId: id,otp
        }).then(res=>{
            
                Swal.fire({
                    icon: 'success',
                    text: `${res.data.message}`
                });
                history.push("/author/login")
            
            
        }).catch(error=>{
            Swal.fire({
                        icon : 'error' ,
                        text : `${error.response.data.message}`
                    })
        })
       
    };
    return (
        <Form>
            
                <label htmlFor="otp">OTP</label>
                <FormInput
                    type="text"
                    id="otp"
                    placeholder="6-digit pin"
                    onChange={event => {
                        setOTP(event.target.value);
                    }}
                />
             
            <Button className="button1" theme="success" onClick = {submitHandler}>
                Submit
            </Button>
        </Form>
        
    );
}

export default AuthorOTP;
