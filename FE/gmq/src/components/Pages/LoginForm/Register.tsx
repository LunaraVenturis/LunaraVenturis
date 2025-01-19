import './Login.css'; 
import { useState } from 'react';
export const Register = (): JSX.Element => {

    const [data, setData] = useState ({
            name: '',
            email: '',
            password: '',
        })

    const registerUser = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return(
        
        <div className='login-container'>
            <div className='loginWrp'>
            <form action="" onSubmit={registerUser}>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Email' required />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Confirm Password' required />
                </div>
                <div className='rememberme'>
                    <label><input type='checkbox'/>I agree to the terms of service</label>
                </div>
                <button type = "submit">Sign Up</button>
                
                
            </form>
   
        </div>
        <div className='bottomtext'>
                <h3>
                GMQ is free and your account is private by default. We use your email address to connect you to your account.
You must be at least 2 + 1 years old to create an account on GMQ.
By continuing, you indicate that you have read and agree to GMQ's <a href="/TOS">Terms of Service</a> and <a href="">Privacy Policy</a>.
                </h3>
            </div>
        </div>
        
    )
}