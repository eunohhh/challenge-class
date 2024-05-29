import { useContext } from "react";
import AuthContext from "../contexts/authContext";

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("오류 발생 프로바이더 안쪽에서 사용하세요");
    }
    return context;
}

export default useAuth;
