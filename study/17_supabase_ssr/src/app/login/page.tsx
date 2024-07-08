"use client";
import { useAuth } from "@/context/auth.context";
import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [user, setUser] = useState<User | null>(null);

    const { login, logout, signup, me, isInitialized, isLoggedIn } = useAuth();

    // const router = useRouter();

    const handleClickLogin = () => login(email, password);
    const handleClickLogout = () => logout();
    const handleClickSignup = () => signup(email, password);

    // const handleClickLogin = async () => {
    //     if (user) return alert("이미 로그인 되어있습니다.");
    //     if (!email || !password) return alert("모든 항목을 입력해주세요");

    //     try {
    //         const response = await fetch("/api/auth/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });

    //         // if (response.ok) {
    //         //     router.push("/");
    //         // }
    //         const { user } = await response.json();
    //         setUser(user);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const handleClickSignup = async () => {
    //     if (user) return alert("이미 로그인 되어있습니다.");
    //     if (!email || !password) return alert("모든 항목을 입력해주세요");

    //     try {
    //         const response = await fetch("/api/auth/sign-up", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });

    //         // if (response.ok) {
    //         //     router.push("/");
    //         // }
    //         const { user } = await response.json();
    //         setUser(user);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const handleClickLogout = async () => {
    //     if (!user) return alert("로그인 되어있지 않습니다.");

    //     try {
    //         const response = await fetch("/api/auth/logout", {
    //             method: "DELETE",
    //         });

    //         if (response.ok) {
    //             const { message } = await response.json();
    //             console.log(message);
    //             setUser(null);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const response = await fetch("/api/auth/me");
    //         if (response.status === 200) {
    //             const { user } = await response.json();
    //             setUser(user);
    //         }
    //     };
    //     fetchUser();
    // }, []);

    return (
        <form className="flex flex-col items-center justify-center h-screen">
            <h1>{me ? <>현재 로그인 한 유저는 {me.email}입니다.</> : <>로그인 되어있지 않습니다.</>}</h1>

            <hr className="my-10 w-full border-black"></hr>

            <label htmlFor="email">Email:</label>
            <input
                className="input"
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                className="input"
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="button" type="submit" onClick={handleClickLogin}>
                로그인하기
            </button>
            <button className="button" type="button" onClick={handleClickLogout}>
                로그아웃하기
            </button>

            <hr className="my-10 w-full border-black"></hr>

            <button className="button" type="button" onClick={handleClickSignup}>
                회원가입하기
            </button>
        </form>
    );
}

export default LoginPage;
