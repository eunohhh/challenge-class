import { PropsWithChildren } from "react";

// type VeryUsefulType<T> = T & {
//     children: ReactNode;
// };

interface CounterButtonProps {
    onClick: () => void;
}

function CounterButton({
    children,
    onClick: handleClick,
}: PropsWithChildren<CounterButtonProps>) {
    return <button onClick={handleClick}>{children}</button>;
}

export default CounterButton;
