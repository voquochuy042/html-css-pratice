import { Link } from 'react-router-dom';
import './navbar.css'
const NavBar = () => {
    return (
        <>
            <nav className="nav-bar">
                <Link to="/" >Home</Link>
                <Link to="/cocktails" >Beverage</Link>
                <Link to="/checkout" >Check Out</Link>
            </nav>
        </>
    );
}

export default NavBar;