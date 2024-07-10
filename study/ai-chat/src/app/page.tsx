"use client";

import { useState } from "react";

export default function Home() {
    const [content, setContent] = useState<string>("");
    const [response, setResponse] = useState<string>("");

    const handleClickTalk = async () => {
        const res = await fetch("/api/talk", {
            method: "POST",
            body: JSON.stringify({ content: `${content}` }),
        });

        const { data } = await res.json();
        console.log("data => ", data);
        setResponse(data);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">ai와 대화하기 </h1>

            <textarea
                className="border border-gray-300 p-2"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className="bg-blue-500 text-white p-2" onClick={handleClickTalk}>
                Submit
            </button>

            <p className="mt-10">{response}</p>

            <img src={response} alt="image" />
        </main>
    );
}
