import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

function DefaultLayout() {
    return (
        <div id="default-layout">
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
}

export default DefaultLayout;
