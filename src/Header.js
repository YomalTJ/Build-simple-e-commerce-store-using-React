import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="header">
            <h1>Tech House</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Product</Link>
            </div>
        </nav>
    );
}
 
export default Header;