import Layout from "./components/Layout";
import Article from "./components/article";
import Aside from "./components/aside";
import GlobalStyle from "./globalStyles";

function App() {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Aside />
                <Article />
            </Layout>
        </>
    );
}

export default App;
