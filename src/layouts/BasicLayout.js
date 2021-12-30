import React from 'react'

export default function BasicLayout(props) {
    const { children } = props;

    return (
        <>
            <h1>Menu</h1>
            {children}
        </>
    )
}
