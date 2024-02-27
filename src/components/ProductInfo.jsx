import "./ProductInfo.css";
import Cart from "./icons/Cart";

export default function ProductInfo({productTitle, description, newPrice, oldPrice}) {
  return (
    <div className="product-content">
      <div className="product__image"></div>
      <div className="product__meta">
        <h1 className="product__title">{productTitle}</h1>
        <div className="product__price">
          <span className="product__price-new">${newPrice}</span>
          <s className="product__price-old">${oldPrice}</s>
        </div>
        <button className="product__add-button">
          <Cart/>
          <span>Add to cart</span>
        </button>
        <p className="product__description">{description}</p>
      </div>
    </div>
  )
}