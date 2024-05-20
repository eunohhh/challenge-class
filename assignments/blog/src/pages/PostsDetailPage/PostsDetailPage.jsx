import { useLoaderData } from "react-router-dom";

function PostsDetailPage() {
    const post = useLoaderData();

    // const params = useParams();

    // console.log(post);
    return (
        <div>
            <h1>PostsDetailPage</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default PostsDetailPage;
