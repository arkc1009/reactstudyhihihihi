import React, {useState, useEffect} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [startValue, setStartValue] = useState(0);

    const onClickAddButton = () => {
        setCount(count + 1);
    }

    const onClickDecButton = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        setCount(parseInt(prompt("Counter의 초기값? ", 0)));
    }, [])

    useEffect(() => {
        console.log(count);
    })

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={onClickAddButton}>+</button>
                <button onClick={onClickDecButton}>-</button>
            </div>
        </div>
    );
}

export default Counter;
