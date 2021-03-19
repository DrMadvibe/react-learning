import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    return (
        <>
            <h1>Contact</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </>
    )
}

export default Contact