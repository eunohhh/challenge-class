import useAuth from "../hooks/useAuth";

function Button() {
    const { isLoggedIn, logIn, logOut } = useAuth();

    console.log(isLoggedIn);
    return (
        <div>
            <button onClick={logIn}>로그인하기</button>
            <button onClick={logOut}>로그아웃하기</button>
        </div>
    );
}

export default Button;
