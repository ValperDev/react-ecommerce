import testData from "../data/test-data.json";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {
  return(
    <section>
      <ul>
        {testData.map(product => (
          <ProductCard 
            key={product.productId}
            handle={product.handle}
            title={product.productTitle}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice} />
        ))}
      </ul>
    </section>
  );
}