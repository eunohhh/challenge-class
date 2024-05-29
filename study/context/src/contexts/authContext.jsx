/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const initialValue = {
    isLoggedIn: false,
};

const AuthContext = createContext(initialValue);

// context API 는 value 가 하나로 취급됨
// 일부만 바뀌어도 전체가 리렌더링될 수 있음 === isLoggedIn 만 바뀌어도
// useMemo, useCallback 과는 무관한 문제임
// isLoggedIn 이 바뀌면 AuthProvider 가 리렌더링되고
// 그러면 value 도 리렌더링됨
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = () => setIsLoggedIn(true);
    const logOut = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
