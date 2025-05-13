import React, { useEffect, useRef } from 'react'

const Focus = () => {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.select()
    }
    useEffect(() => {
        inputRef.current.Focus();

    }, [])

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <input ref={inputRef} type="text" placeholder="Type here..." />
            <br /><br />
            <button onClick={handleClick} >Select Input</button>
        </div>
    )
}

export default Focus