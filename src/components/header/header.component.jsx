import React from 'react';
import {Link} from 'react-router-dom'


import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';


const Header= ({hidden})=>(
    <div className="header">
        <Link className='logo-container' to="">
            <Logo className='logo' />
        </Link>
    <div className='options'>
        <Link className='option' to='/node'>NODE</Link>
        <Link className='option' to='/net'>.NET</Link>
        <Link className='option' to='/java'>JAVA</Link>
        <Link className='option' to='/php'>PHP</Link>
        <Link className='option' to='/mongodb'>MONGODB</Link>
       
        <Link className='option' to='/action'>Action</Link>
        
        <Link className='option' to='/signin'>SIGN IN</Link>   
        
    </div>
       
    </div>
)







export default Header;