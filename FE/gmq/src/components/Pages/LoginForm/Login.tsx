import React from 'react'
import './Login.css'
export const Login = (): JSX.Element => {
    return(
        <div className='login-container'>
            <div className='loginWrp'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                </div>
                <div className='rememberme'>
                    <label><input type='checkbox'/>Remember me</label>
                </div>
                <button type = "submit">Login</button>
                <div className='register'>
                    <p>Don't have an accout? <a href="/Login">Register</a></p> 
                </div>
                <div className='forgor'>
                    <a href="/Login">Forgor password?</a>
                </div>
            </form>
        </div>
        </div>
        
    )
}