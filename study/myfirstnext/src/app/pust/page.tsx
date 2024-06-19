import Link from "next/link";

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
}

async function PostsListPage() {
    const posts = await getPosts();

    return (
        <div>
            <h1>포스트 목록</h1>

            <nav>
                <ul>
                    {posts.map((post: any) => (
                        <li key={post.id}>
                            <Link href={`/pust/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default PostsListPage;
