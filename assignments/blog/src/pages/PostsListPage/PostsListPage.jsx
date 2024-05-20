// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function PostsListPage() {
    const posts = useLoaderData();

    return (
        <div>
            <h1>PostsListPage</h1>

            <ol>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default PostsListPage;

// const [posts, setPosts] = useState([]);

// useEffect(() => {
//     const fetchPosts = async () => {
//         const url = "https://jsonplaceholder.typicode.com/posts";

//         const response = await fetch(url);
//         const data = await response.json();

//         setPosts(data);
//     };

//     fetchPosts();
// }, []);
