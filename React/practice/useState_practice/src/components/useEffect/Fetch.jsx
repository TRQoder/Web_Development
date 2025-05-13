import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();
            setData(result);
            setLoading(false);
        }
        fetchData();

    }, [])

    if (loading) return <div>Loading ...</div>

    return (
        <div>
            <h2>Fetched Data:</h2>
            <ul>
                {data.map((item)=> (
                     <li key={item.id}>{item.title}</li>
                )
                   
                )}
            </ul>
        </div>
    )
}

export default Fetch