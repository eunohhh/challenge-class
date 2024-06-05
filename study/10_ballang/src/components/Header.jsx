import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to={"/"}>home</Link>
            <Link to={"/cart"}>cart</Link>
            <Link to={"/log-in"}>login</Link>
            <Link to={"/sign-up"}>signup</Link>
        </header>
    );
}

export default Header;
