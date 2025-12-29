import {useState, useEffect } from 'react'

export default function MyTest() {
    const [counter, setCounter] = useState(0);

    useEffect (()=>{
       
        if (counter == prev){
            setCounter = prev += 1;
        }
    }, [counter])
    
    return (
        <>

        <h1>this is my react tester</h1>
        <p  >counter : 0</p>
        <button onClick={()=>{setCounter}}>Count</button>
        </>
    )
}