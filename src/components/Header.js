import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.png";

export const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={Logo} alt="ShopHere Logo" />
                <span>ShopHere</span>
            </Link>

            <nav className="navigation">
                <NavLink to="/" className="link" end>Home</NavLink>
                <NavLink to="/Cart" className="link">Cart</NavLink>
            </nav>
            <Link to="/" className="items">
                <span>Cart: 2</span>
            </Link>
        </header>
    )
}
