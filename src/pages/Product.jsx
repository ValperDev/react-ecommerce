import { useParams } from "react-router-dom"
import testData from "../data/test-data.json";
import ReviewItem from "../components/ReviewItem";
import ProductInfo from "../components/ProductInfo";

export default function Product() {
  const { handle } = useParams();
  const findProduct = (handle) => {
    return testData.find(product => product.handle === handle);
  }
  const { description, oldPrice, productTitle, newPrice, reviews } = findProduct(handle);
  return(
    <section className="product-container">
      <ProductInfo
        description={description}
        oldPrice={oldPrice}
        productTitle={productTitle}
        newPrice={newPrice}/>
      <h2 className="reviews-heading">Customer Reviews</h2>
      <ul className="review-list">
        {reviews && reviews.map(review => (
          <ReviewItem 
            key={review.productId}
            rating={review.rating}
            reviewTitle={review.reviewTitle}
            description={review.description}
            reviewContent={review.reviewContent}
            reviewDate={review.reviewDate}
            isRecommended={review.isRecommended}
            reviewerName={review.reviewerName} />
        ))}
      </ul>
    </section>
  )
}