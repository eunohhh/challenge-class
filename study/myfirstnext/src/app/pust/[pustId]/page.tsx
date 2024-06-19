async function getPost(postId: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();

    return data;
}

async function PostsDetailPage(props: any) {
    const params = props.params;
    const postId = params.pustId;

    const post = await getPost(postId);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default PostsDetailPage;
