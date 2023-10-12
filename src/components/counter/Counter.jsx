import { useState } from "react";
import "./Counter.css"

import CounterButton from "./CounterButton";


export default function Counter() {
    const [count, setState] = useState(0)
    function incrementTheValue(by) {
        setState(count + by)
    }
    function decrementTheValue(by) {
        setState(count - by)
    }
    function resetFunction() {
        setState(0)

    }
    return (

        <>
            <div>
                <span className="count">{count}</span>
            </div>
            <CounterButton by={1} incrementMethod={incrementTheValue} decrementMethod={decrementTheValue} />
            <CounterButton by={2} incrementMethod={incrementTheValue} decrementMethod={decrementTheValue} />
            <CounterButton by={5} incrementMethod={incrementTheValue} decrementMethod={decrementTheValue} />
            <div>
                <button className="resetButton"
                    onClick={resetFunction}

                >Reset</button>
            </div>
        </>
    )
}
