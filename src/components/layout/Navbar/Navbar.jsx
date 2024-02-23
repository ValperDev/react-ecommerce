import { NavLink } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/all-products'>All Products</NavLink>
          </li>
          <li>
            <NavLink to='/men'>Men</NavLink>
          </li>
          <li>
            <NavLink to='/women'>Women</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}