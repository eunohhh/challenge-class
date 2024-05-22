export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";

const initialState = {
    isLoggedIn: false,
};

// 공장 이므로 함수
const authReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            // 뚝딱뚝딱
            // 작업이 다 변영된 상태를 리턴해 주면 됨
            return { ...prevState, isLoggedIn: true };
        case LOG_OUT:
            return { ...prevState, isLoggedIn: false };
        default:
            return prevState;
    }
};

export default authReducer;
