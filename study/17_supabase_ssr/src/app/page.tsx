import { login, signup } from "./login/action";

export default function Home() {
    const handleClickLogin = () => {
        console.log("로그인 버튼 클릭");
    };
    const handleClickLogout = () => {
        console.log("로그아웃 버튼 클릭");
    };
    const handleClickSignup = () => {
        console.log("회원가입 버튼 클릭");
    };
    return (
        <main className="h-screen flex flex-col items-center justify-center">
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button className="button" formAction={login}>
                    로그인하기
                </button>
                <button className="button" formAction={signup}>
                    로그아웃하기
                </button>
                <button className="button">회원가입하기</button>
            </form>
        </main>
    );
}
