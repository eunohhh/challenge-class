import { ChangeEvent, useState } from "react";
import useToast from "../../hooks/useToast";

function Controller() {
    const { addToasts } = useToast();

    const [input, setInput] = useState({
        title: "Scheduled: Catch up",
        content: "Friday, February 10, 2023 at 5:57 PM",
        duration: 2000,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        const value = e.target.value;

        switch (id) {
            case ":r0:":
                setInput({ ...input, title: value });
                break;
            case ":r1:":
                setInput({ ...input, content: value });
                break;
            case ":r2:":
                setInput({ ...input, duration: Number(value) });
                break;
        }
    };

    const handleClick = () => {
        addToasts(input);
    };

    return (
        <div className="grid grid-cols-1 gap-y-6">
            <h1 className="text-2xl font-semibold text-center">
                토스트 컨트롤러
            </h1>
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-1.5 items-start">
                    <label htmlFor=":r0:" className="text-sm font-medium">
                        {"제목 (필수)"}
                    </label>
                    <input
                        id=":r0:"
                        className="border px-4 py-2.5 rounded-md w-80"
                        value={input.title}
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="flex flex-col gap-y-1.5 items-start">
                    <label htmlFor=":r1:" className="text-sm font-medium">
                        {"내용 (필수)"}
                    </label>
                    <input
                        id=":r1:"
                        className="border px-4 py-2.5 rounded-md w-80"
                        value={input.content}
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="flex flex-col gap-y-1.5 items-start">
                    <label htmlFor=":r2:" className="text-sm font-medium">
                        {"노출 시간(ms) (선택)"}
                    </label>
                    <input
                        id=":r2:"
                        className="border px-4 py-2.5 rounded-md w-80"
                        type="number"
                        value={input.duration}
                        onChange={handleInputChange}
                    ></input>
                </div>
            </div>
            <button
                onClick={handleClick}
                className="bg-black text-white py-3 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70"
            >
                토스트 띄우기
            </button>
        </div>
    );
}

export default Controller;
