import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <div>
            <Link to="/">홈페이지</Link>
            <br />
            <Link to="/posts">포스트목록페이지</Link>
            <br />
            <Link to="/posts/12">포스트상세페이지</Link>

            <Outlet />
        </div>
    );
}

export default DefaultLayout;
