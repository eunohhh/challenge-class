import { CREATE, DELETE, Memo, UPDATE } from "@/types/d";
import formattedDate from "@/utils/getTime";
import { UnknownAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState: Memo[] = [
    {
        id: uuid(),
        contents: "",
        time: formattedDate,
    },
];
// 흐미 이버전 타입 왜이렇게 어려울까요 ㅠㅠ
// 공장 이므로 함수
const memoReducer = (
    prevState = initialState,
    action: UnknownAction
): Memo[] => {
    switch (action.type) {
        case CREATE: {
            const newMemo: Memo = {
                id: uuid(),
                contents: action.payload as string,
                time: formattedDate,
            };
            return [newMemo, ...prevState];
        }
        case DELETE: {
            const filtered = prevState.filter(
                (memo) => memo.id !== action.payload
            );
            return filtered;
        }
        case UPDATE: {
            const mapped = prevState.map<Memo>((memo) => {
                if (
                    action.payload &&
                    typeof action.payload === "object" &&
                    "id" in action.payload &&
                    "contents" in action.payload
                ) {
                    if (memo.id === (action.payload.id as string)) {
                        return {
                            ...memo,
                            contents: action.payload.contents as string,
                        };
                    } else {
                        return memo;
                    }
                } else {
                    return memo;
                }
            });
            return mapped;
        }
        default:
            return prevState;
    }
};

export default memoReducer;
