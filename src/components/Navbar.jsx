import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/Representatives">REPRESENTATIVES</Link>
            <Link to="/Legislation">LEGISLATION</Link>
            <Link to="/about">ABOUT</Link>
        </nav>
    );
}
 
export default Navbar;