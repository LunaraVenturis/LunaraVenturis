import React from 'react'
import './Login.css'
import { useState } from "react";
import axios from 'axios';
export const Login = (): JSX.Element => {
    const [data, setData] = useState ({
        name: '',
        password: '',
    })
    const loginUser = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
      
    }
    return(
        <div className='login-container'>
            <div className='loginWrp'>
            <form action="" onSubmit={loginUser}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                </div>
               
                <button type = "submit">Login</button>
                <div className='register'>
                    <p>Don't have an accout? <a href="/Register">Register</a></p> 
                </div>
                <div className='forgor'>
                    <a href="/Login">Forgor password?</a>
                </div>
            </form>
   
        </div>
        <div className='bottomtext'>
                <h3>
                GMQ is free and your account is private by default. We use your email address to connect you to your account.
You must be at least 2 + 1 years old to create an account on GMQ.
By continuing, you indicate that you have read and agree to GMQ's <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.
                </h3>
            </div>
        </div>
        
    )
}