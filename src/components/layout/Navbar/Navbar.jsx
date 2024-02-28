import { NavLink, Link } from 'react-router-dom';
import Logo from "../../../assets/logo.png";
import "./Navbar.css"

export default function Navbar() {
  return(
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" className="logo__link">
            <img className='logo__image' src={Logo} alt="" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="navbar__items">
            <li className="navbar__item">
              <NavLink className="navbar__link" to='/all-products'>All Products</NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__link" to='/women'>Men</NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__link" to='/men'>Women</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}