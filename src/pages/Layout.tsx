import {Outlet, Link} from "react-router-dom";

const Layout = ()=> {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/forms">Forms</Link>
                    </li>
                    <li>
                        <Link to="/list-items">List Item</Link>
                    </li>
                    <li>
                        <Link to="/window-tracker">State & Conditional statement</Link>
                    </li>
                    <li>
                        <Link to="/api-integration">Api Integration</Link>
                    </li>
                    <li>
                        <Link to="/reducer">Reducer Hook</Link>
                    </li>
                    <li>
                        <Link to="/life-cycle">Life cycle</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );

   
};

export default Layout;