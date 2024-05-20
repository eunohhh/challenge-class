import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import PostsDetailPage from "../pages/PostsDetailPage";
import PostsListPage from "../pages/PostsListPage";
import postsListPageLoader from "../pages/PostsListPage/PostListPage.loader";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/posts",
                element: <PostsListPage />,
                loader: () => postsListPageLoader(),
            },
            {
                path: "/posts/:postId",
                element: <PostsDetailPage />,
                loader: ({ params }) => postsListPageLoader(params.postId),
            },
        ],
    },
]);

export default router;
