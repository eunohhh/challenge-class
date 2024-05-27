import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    school: {
        class: {
            students: [{ name: "oh", age: 36 }],
        },
    },
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (prevState, action) => {
            // console.log(action.type) === "counter/increment"
            // 액션의 타입이 자동으로 지어짐 name + / + 리듀서명
            const value = action.payload;
            prevState.count = prevState.count + value;
        },
        decrement: (prevState, action) => {
            const value = action.payload;
            prevState.count = prevState.count - value;
        },
        updateEunAge: (prevState) => {
            const found = prevState.school.class.students.find(
                (e) => (e.name = "oh")
            );
            found.age = 20;
        },
    },
});

// 이름은 액션스지만 사실은 액션 크리에이터가 나옴
export const { decrement, increment } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
export default counterReducer;
