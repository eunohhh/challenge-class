import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import HomePageLoader from "@/pages/Home.loader";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/:memoId",
                element: <Home />,
                loader: ({ params }) => HomePageLoader(params.memoId),
            },
        ],
    },
]);

export default router;
