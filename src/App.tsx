import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "./features/counter/counterReducer";
import { formatNumberToUs } from "./function/format-number-to-us";

import { FormEvent } from "react"
import { RootState } from "./types/RootState";
import { isNumber } from "./function/is-number";

export default function App () {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrease = () => dispatch(increment({}));
    const handleDecrease = () => dispatch(decrement());

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries());
        const value = Number(values.input);

        if (!value || !isNumber(value)) {
            return alert("This value is not a number!");
        }

        dispatch(increment({ value: value }));
        alert(`Increased by ${formatNumberToUs(value)}!`);

        e.currentTarget.reset();
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
                    onClick={handleIncrease}
                >
                    Increase
                </button>
                <button
                className="outline"
                    onClick={handleDecrease}
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
                        defaultValue={0}
                        name="input"
                        placeholder="Enter number..."
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