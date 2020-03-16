import React, { useState, useEffect } from 'react';

const Numbers = () => {
    const [numbers, setNubmers] = useState(['one', 'two', 'three']);

    const addNumber = () => {
        setNubmers([...numbers, 'four'])
    }

    useEffect(()=>{
        console.log('our use effect triggers');
    })
    return (
        <div>
            <h1>Numbers</h1>
            { numbers.map(num=>{
                return <h4 key={num}>{num}</h4>
            })}
            <button onClick={addNumber}>add number</button>
        </div>
    )
}

export default Numbers;