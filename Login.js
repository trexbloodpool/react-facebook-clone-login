import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom';
function login() {
    return (
        <div className='Login'>
            <div className="Login__container">
                <h3>Log in to Facebook</h3>
                <form>
                    <center>
                        <input type="text" placeholder="Email Address"/>
                    </center>
                    <center>
                           <input type="Password" placeholder="Password"/>
                    </center>
                    <center>
                        <button type="submit" className="login__login">Log In</button>
                    </center>
                    <center>
                        <h6>Forgot Password</h6>
                    </center>
                    <center>
                        <hr />
                    </center>
                    <center>
                        <Link to ="/register">
                            <button className="Login__createNewAccount">Create New Account</button>
                        </Link>
                    </center>
                </form>
                
            </div>           
        </div>
    )
}

export default login;
