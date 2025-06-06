import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/hobbits">Let's see these hobbits</Link>
                    </li> */}
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;