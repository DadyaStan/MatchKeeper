import { Link } from "react-router-dom";

import "./HeaderComponent.scss";

function Header() {
    return (
        <header className="header">
            <ul>
                <Link to="/" className="header__link">Основа</Link>
                <Link to="/table" className="header__link">Турниры</Link>
                <Link to="/tournament" className="header__link">" Ссылка турнира "</Link>
                <Link to="/about" className="header__link">О Нас</Link>
            </ul>
            <div>
                <Link to="/auth" className="header__link loginn">Войти</Link>
            </div>
        </header>
    );
}

export default Header;