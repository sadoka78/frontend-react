import {useState} from 'react';

export default function Counter() {
    const [count,setCount] = useState<number>(0);

    return(
        <div>
            <h3>Counter</h3>
            <p>Value: {count}</p>

            <button onClick={()=> setCount(count +1)}>Increment</button>
            <button onClick={()=> setCount(count -1)}>Decrement</button>
        </div>
    );
}