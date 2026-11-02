import { useSelector, useDispatch } from "react-redux";

function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Redux Counter</h2>

            <h3>Count: {count}</h3>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </button>
        </div>
    );
}

export default Counter;