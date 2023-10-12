import "./Counter.css"
import { PropTypes } from "prop-types"

export default function CounterButton({ by, incrementMethod, decrementMethod }) {


    function incrementCounterFunction() {

        incrementMethod(by)
    }
    function decrementCounterFunction() {

        decrementMethod(by)

    }


    return (
        <div>


            <div>
                <button className="counterButton"
                    onClick={incrementCounterFunction}
                >+{by}</button>

                <button className="decrementButton"
                    onClick={decrementCounterFunction}

                >-{by}</button>

            </div>




        </div>
    );
}

CounterButton.propTypes = {
    by: PropTypes.number
}
CounterButton.defaultProps = {
    by: 1
}