import useAuth from "../hooks/useAuth";

function Display() {
    const { isLoggedIn } = useAuth();

    return <div>로그인 여부{String(isLoggedIn)}</div>;
}

export default Display;
