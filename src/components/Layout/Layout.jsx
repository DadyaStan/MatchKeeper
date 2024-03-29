import { Outlet } from "react-router-dom";

import Header from "../Header/HeaderComponent";

function Layout() {
    return (
        <div>
            <div className="container">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;