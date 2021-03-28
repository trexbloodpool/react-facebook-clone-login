import React from 'react'
import './LoginHeader.css';
import {Link} from 'react-router-dom';

function LoginHeader() {
    return (
        <div className="header">
           <Link className='link' to='/'>
                <img src="https://i.ibb.co/WzybLQK/del.png" alt="Facebook logo" className="header__logo"/>
           </Link>


            <Link className="/register" to="/register">
                <button className="header__button">Create New Account</button>
            </Link>
           
            
        </div>
    )
}

export default LoginHeader
