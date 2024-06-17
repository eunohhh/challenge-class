import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

const END_POINT = "https://jsonplaceholder.typicode.com/posts";

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

function Posts() {
    // const [posts, setPosts] = useState<Post[]>([]);

    const { data: posts = [] } = useQuery<
        AxiosResponse<Post[]>,
        AxiosError,
        Post[]
    >({
        queryKey: ["posts"],
        queryFn: () => axios.get(END_POINT),
        select: (response) => response.data,
    });

    // useEffect(() => {
    //     axios.get<Post[]>(END_POINT).then((response) => {
    //         console.log(response.data);
    //         setPosts(response.data);
    //     });
    // }, []);

    return (
        <ol>
            {posts.map((post) => (
                <li key={post.id}>
                    [{post.id}] {post.title}
                </li>
            ))}
        </ol>
    );
}

export default Posts;
