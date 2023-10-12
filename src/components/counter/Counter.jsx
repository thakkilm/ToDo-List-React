import "./Counter.css"
export default function Counter() {
   
    function incrementCounterFunction() {
        console.log("Counter Clicked")
    }
    return (
        <div>
            <div className="Counter">Counter</div>
            <span className="count">0</span>
            <div>
                <button className="counterButton"
                    onClick={incrementCounterFunction}
                  
                >+1</button>
            </div>

        </div>
    );
}