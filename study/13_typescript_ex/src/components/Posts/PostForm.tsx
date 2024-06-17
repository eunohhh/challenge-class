import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRef } from "react";
import { Post } from "./Posts";

const END_POINT = "https://jsonplaceholder.typicode.com/posts";

function PostForm() {
    const titleDomRef = useRef<HTMLInputElement>(null);
    const bodyDomRef = useRef<HTMLTextAreaElement>(null);

    const { mutateAsync: createPost } = useMutation<
        AxiosResponse<Post>,
        AxiosError,
        { title: string; body: string; userId: number }
    >({
        mutationFn: (data) => axios.post(END_POINT, data),
    });

    const handleClickButton = async () => {
        const title = titleDomRef.current?.value;
        const body = bodyDomRef.current?.value;

        if (!title || !body) {
            return;
        }

        const data = { title, body, userId: 1 };

        await createPost(data);
    };

    return (
        <div className="flex flex-col p-4">
            <input
                ref={titleDomRef}
                className="border border-black"
                type="text"
            />
            <textarea ref={bodyDomRef} className="border border-black" />
            <button className="border border-black" onClick={handleClickButton}>
                추가
            </button>
        </div>
    );
}

export default PostForm;
