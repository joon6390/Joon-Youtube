import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em aria-hidden='true'></em>
                <span>Joon's<br />YouTube</span>
            </Link>
        </h1>
    )
}

export default Logo;
