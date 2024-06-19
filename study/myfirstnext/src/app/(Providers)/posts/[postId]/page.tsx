function PostDetailPage({ params }: { params: { postId: string } }) {
    return <div>My Post: {params.postId}</div>;
}

export default PostDetailPage;
