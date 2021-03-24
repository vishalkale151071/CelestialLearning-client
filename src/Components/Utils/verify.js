import Axios from 'axios';
import Swal from 'sweetalert2';

export default function verify(_url, _redirect_url, _token, _history){
    
    Axios.post(_url,
            {},
            {
                headers : {
                'Authorization' : `Bearer ${_token}`
                }
            }).then(res=>{
                Swal.fire({
                            icon : 'success' ,
                            text : `${res.data.message}`
                        })
                        _history.push(_redirect_url);
            }).catch(error=>{
                Swal.fire({
                            icon : 'error' ,
                            text : `${error.response.data.message}`
                        })
            })
}