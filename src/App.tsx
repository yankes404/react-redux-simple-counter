import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

interface RootState {
    counter: { value: number };
}

export default function App () {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState(0);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(increment({ value: inputValue }));
        alert(`Increased by ${inputValue.toLocaleString("en-US")}!`);
        setInputValue(0);
    }

    return (
        <div className="container">
            <h1>
                React Redux Counter
            </h1>
            <div className="value-box">
                Current Value: <strong>{count.toLocaleString("en-US")}</strong>
            </div>
            <div className="buttons">
                <button
                    onClick={() => dispatch(increment({}))}
                >
                    Increase
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                >
                    Decrease
                </button>
            </div>
            <form
                onSubmit={onSubmit}
            >
                <div className="field">
                    <label htmlFor="input">Increase by custom value</label>
                    <input
                        type="number"
                        id="input"
                        placeholder="Enter number..."
                        value={inputValue}
                        onChange={(e) => setInputValue(Number(e.target.value))}
                    />
                </div>
                <button>Submit</button>
            </form>
            <footer>
                By <a href="https://github.com/yankes404" target="_blank">yankes404</a>
            </footer>
        </div>
    )
}