import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function SignUpPage() {
    const { mutateAsync: signUp } = useMutation({
        mutationFn: (data) => api.auth.signUp(data),
    });

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();

    const handleClickSignUp = async () => {
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const data = { email, password };

        try {
            await signUp(data);

            alert("회원가입 완료");
            navigate("/");
        } catch (error) {
            alert("회원가입 실패");
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
            <button onClick={handleClickSignUp}>회원가입하기</button>
        </div>
    );
}

export default SignUpPage;
