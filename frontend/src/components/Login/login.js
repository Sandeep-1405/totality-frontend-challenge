import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//import Forgot from '../Forgot/forgot'
//import Home from '../Home/home'
//import { CookiesProvider, useCookies } from 'react-cookie'
import Cookies from 'js-cookie'


const Login = () =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [errormsg,seterrMsg] = useState('')
    const [user,setuser] = useState('User')

    function onChangeEmail(event){
        setEmail(event.target.value)
    }
    function onChangePassword(event){
        setPassword(event.target.value)
    }

    const navigate = useNavigate();

   

    const onSubmitSuccess = (jwtTkoken) => {
    
        Cookies.set("jwt_token", jwtTkoken, {
          expires: 30,
          path: "/",
        });
        navigate("/");
    };
    
    const onSubmitFailure = (errorMsg) => {
        console.log(errorMsg);
        seterrMsg({errorMsg });
    };

    /*const onClickLogin = async(event) =>{
        const userDetails = { email, password };
        console.log(userDetails)
        const url = "https://apis.ccbp.in/login";
        const options = {
        method: "POST",
        body: JSON.stringify(userDetails),
        };
        const response = await fetch(url, options);
        const data = await response.json();
        if (response.ok === true) {
            {onSubmitSuccess(data.jwt_token)};
        } else {
            {onSubmitFailure(data.error_msg)};
        }
    };*/

    function onClickLogin(){
        if (email ==="sandeep@gmail.com" && password ==="Sandeep@123"){
            navigate("/")
        }else{
            seterrMsg("Invalid Details")
        }
    }

    function onClickSignup(){
        navigate('/signup')
    }

    return(
        <div className="">
            
            <div className="lcard">
                <h1 className='loginheading'>Login</h1>
                <hr />
                <select className='w-25 m-3' onChange={e=>(setuser(e.target.value))}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>

                <div>
                    <input type='email' placeholder='Email' className='m-3'  onChange={onChangeEmail} required/>
                    <br/>
                    <input type="password" placeholder='Password' className=' m-3 mb-0' onChange={onChangePassword} required/>

                    <p className='text-danger m-3'>{errormsg}</p>

                    <div className=''>
        
                        <a href='http://localhost:3000/Forgot' className='forgot'>forgot password?</a>

                        

                    </div>
                    <button className='btns btn btn-outline-warning m-3' onClick={onClickLogin}>Login</button>

                    <div>
                        <a href='http://localhost:3000/Signup' onClick={onClickSignup} className='forgot text-primary m-3'>Not yet Signup?</a>
                    </div>
                </div>
            </div>          
        </div>
        
    )
}
export default Login