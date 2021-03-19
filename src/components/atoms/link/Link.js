import React from 'react'

const Link = props => {

    const {
        href = '',
        rel,
        target,
        children
    } = props

    return (
        <>
            {/*<a href={ href } rel={ rel } target={ target } className="a-link">{ children }</a>*/}
            <a { ... { href, rel, target } } className="a-link">{ children }</a>
        </>
    )
}

export default Link