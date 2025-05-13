import React, { useEffect, useState } from 'react'

const WindowSizeTracker = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);

        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [windowWidth])

    return (
        <div>
            <h1>Window Width: {windowWidth}</h1>
        </div>
    )
}

export default WindowSizeTracker