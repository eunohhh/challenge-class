import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;
