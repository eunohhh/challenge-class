import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const { isPending, mutate } = useMutation({
        mutationFn: (variable) => {
            console.log(variable);
            axios.post(ENDPOINT, { value: variable });
        },
        // 뮤테이션의 result 가 여기 인자로
        onSuccess: (...result) => {
            console.log(result);
            alert("성공");
        },
        onError: () => {
            alert("실패");
        },
    });

    const handleClickButton = async () => {
        try {
            console.log(value);
            // const response = await axios.post(ENDPOINT, { value })
            // const data = response.data;
            // console.log(data);
            mutate(inputRef.current.value);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Page>
            <input
                type="text"
                className="border"
                onChange={(e) => setValue(e.target.value)}
                disabled={isPending}
                ref={inputRef}
            ></input>
            <button
                className="bg-black text-white"
                onClick={handleClickButton}
                disabled={isPending}
            >
                눌러눌러
            </button>
        </Page>
    );
}

export default TodoPage;
