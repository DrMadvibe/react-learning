import React from 'react'

const Input = props => {

    const {
        children,
        className,
        id,
        name,
        type,
        value
    } = props

    return (
        <>
            <input
                id={id}
                className={className}
                name={name}
                type={type}
                value={value}
            >
                {children}
            </input>
        </>
    )
}

export default Input