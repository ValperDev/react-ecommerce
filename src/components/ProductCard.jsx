import { Link } from "react-router-dom";

export default function ProductCard({handle, title, oldPrice, newPrice}) {
  return(
    <li>
      <Link to={`/all-products/${handle}`}>{title}</Link>
      <div>
        <span>{newPrice}</span>
        <span>{oldPrice}</span>
      </div>
    </li>
  );
}