import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
    const modal = useModal();
    const { lock } = useScrollLock();

    const handleClickButton = () => {
        modal.open({ title: "sample", content: "2222" });
        lock();
    };

    return (
        <>
            <button onClick={handleClickButton}>눌러봐</button>
            {Array(500)
                .fill(0)
                .map((_, i) => (
                    <div key={i}>{i}</div>
                ))}
        </>
    );
}

export default App;
