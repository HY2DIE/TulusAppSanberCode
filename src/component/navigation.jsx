import React from 'react';
import {
    Link,
} from 'react-router-dom'
import '../style/navigation.css'

function Navigation(){
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    )
}

export default Navigation;