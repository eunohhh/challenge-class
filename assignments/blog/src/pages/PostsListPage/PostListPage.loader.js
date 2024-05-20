export default async function postsListPageLoader(postId = "") {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}
