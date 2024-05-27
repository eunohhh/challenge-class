import { useDispatch } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { decrement, increment } from "./redux/slices/counter.slice";

function App() {
    const dispatch = useDispatch();

    const incrementByFive = () => {
        const action = increment(5);
        dispatch(action);
    };

    const decrementByFive = () => {
        const action = decrement(5);
        dispatch(action);
    };
    return (
        <main>
            <Display></Display>
            <Button label="빼기 5" onClick={decrementByFive}></Button>
            <Button label="더하기 5" onClick={incrementByFive}></Button>
        </main>
    );
}

export default App;
