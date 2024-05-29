import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { AuthProvider } from "./contexts/authContext";

function App() {
    return (
        <AuthProvider>
            <main>
                <Display></Display>
                <Button></Button>
            </main>
        </AuthProvider>
    );
}

export default App;
