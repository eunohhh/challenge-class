import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function LogInPage() {
    const { mutateAsync: LogIn } = useMutation({
        mutationFn: (data) => api.auth.logIn(data),
    });

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();

    const handleClickSignUp = async () => {
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const data = { email, password };

        try {
            await LogIn(data);

            alert("로그인 완료");
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("로그인 실패");
        }
    };
    return (
        <div>
            <input ref={emailInputRef} type="email" placeholder="email"></input>
            <input
                ref={passwordInputRef}
                type="password"
                placeholder="password"
            ></input>
            <button onClick={handleClickSignUp}>로그인하기</button>
        </div>
    );
}

export default LogInPage;
