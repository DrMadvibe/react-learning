import React from 'react'

const Heading = props => {

    const {
        name,
        className
    } = props

    return (
        <>
            <h1 className={className}>Welcome {name}!</h1>
        </>
    )
}

export default Heading