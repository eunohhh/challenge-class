import { ChangeEvent, ChangeEventHandler, useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

function Counter() {
    const [count, setCount] = useState<number>(0);
    const [unit, setUnit] = useState<number>(1);

    const decrement = () => {
        setCount(count - unit);
    };

    const increment = () => {
        setCount(count + unit);
    };

    const handleChangeUnit: ChangeEventHandler<HTMLInputElement> = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        setUnit(Number(e.target.value));
    };

    // const handleChangeUnit : (e : {target: {value : string}}) => void = (e) => {
    //     setUnit(Number(e.target.value));
    // };

    return (
        <div>
            <CounterDisplay value={count} />

            <input
                type="number"
                placeholder="이곳에 숫자를 넣어주세요"
                value={unit}
                onChange={handleChangeUnit}
            />

            <div className="flex">
                <CounterButton onClick={decrement}>[-]</CounterButton>
                <CounterButton onClick={increment}>[+]</CounterButton>
            </div>
        </div>
    );
}

export default Counter;
