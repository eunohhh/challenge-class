import { login, signup } from "./action";

function LoginPage() {
    return (
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
    );
}

export default LoginPage;
