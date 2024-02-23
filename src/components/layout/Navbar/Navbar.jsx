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
        </ul>
      </nav>
    </header>
  );
}