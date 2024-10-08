import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react"
import { decrement, increment } from "./features/counter/counterReducer";

import { RootState } from "./types/RootState";
import { formatNumberToUs } from "./function/format-number-to-us";

export default function App () {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState(0);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(increment({ value: inputValue }));
        alert(`Increased by ${formatNumberToUs(inputValue)}!`);
        setInputValue(0);
    }

    return (
        <div className="container">
            <h1>
                React Redux Counter
            </h1>
            <div className="value-box">
                Current Value: <strong>{formatNumberToUs(count)}</strong>
            </div>
            <div className="buttons">
                <button
                    className="outline"
                    onClick={() => dispatch(increment({}))}
                >
                    Increase
                </button>
                <button
                className="outline"
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