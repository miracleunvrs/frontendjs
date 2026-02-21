import type { JSX } from "react";
import {Link, NavLink, Outlet} from "react-router-dom";

function Layout(): JSX.Element {
    return  (
        <>
            <nav style={navStyle}>
                <NavLink to="/" end style={linkStyle}>
                    Home
                </NavLink>
                <NavLink to="/courses" end style={linkStyle}>
                    Courses
                </NavLink>
                <NavLink to="/about" end style={linkStyle}>
                    About
                </NavLink>
            </nav>

            <main style={{padding: "20px"}}>
                <Outlet />
            </main>

            <footer style={footerStyle}>
                Student Portal 2026
            </footer>
        
        </>
    );
};


const navStyle: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#1e293b",
};

const linkStyle = ({isActive}: {isActive: boolean}): React.CSSProperties => ({

    color: isActive ? "#38bdf8" : "#ffffff",
    textDecoration: "none",
    fontWeight: "bold", 
});

const footerStyle: React.CSSProperties = {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f1f5f9",
};
export default Layout;