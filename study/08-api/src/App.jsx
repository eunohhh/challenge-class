import "./App.css";
import useData from "./hooks/useData";

function App() {
    const { data, data2 } = useData();

    console.log(data);
    console.log(data2);

    return (
        <main>
            <h1>hello world</h1>
        </main>
    );
}

export default App;
