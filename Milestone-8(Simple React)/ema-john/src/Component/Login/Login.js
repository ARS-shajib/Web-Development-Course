import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_url = location.pathname || '/shop';
    console.log('came from ', location.pathname);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                navigate('/shop');
                // navigate(redirect_url);


                // if (redirect_url != '/login') navigate(-2); // you will go two pages back
                // else navigate('/shop');
            })
    }

    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id=""
                        placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>

                <div>---------or----------</div>
                <button
                    className='btn-regular'
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;