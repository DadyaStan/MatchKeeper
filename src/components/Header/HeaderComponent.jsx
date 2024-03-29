import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <ul>
                <Link to="/auth">Auth</Link>
                <Link to="/">Main</Link>
                <Link to="/table">Table</Link>
                <Link to="/tournament">Tournament</Link>
            </ul>
        </header>
    );
}

export default Header;