import { useState, useEffect } from "react"

const Counter = () => {
    const  [counterValue, setCounterValue] = useState(0)
    
    useEffect(() => {
        console.log('JE VIS')
        document.title = counterValue
    }, [])

    const increment = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <div>
            <div>{counterValue}</div>
            <div>
                <button onClick={() => setCounterValue(counterValue - 1)}>-</button>
                <button onClick={() => setCounterValue(counterValue + 1)}>+</button>
            </div>
        </div>
    )
}

export default Counter