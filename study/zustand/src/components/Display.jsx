import useLoginStore from "../zustand/login.store";

function Display() {
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

    console.log(isLoggedIn);

    return <div>로그인 여부</div>;
}

export default Display;
