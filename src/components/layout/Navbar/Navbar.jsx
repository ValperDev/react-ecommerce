import { NavLink } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return(
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__items">
          <li className="navbar__item">
            <NavLink className="navbar__link" to='/all-products'>All Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}