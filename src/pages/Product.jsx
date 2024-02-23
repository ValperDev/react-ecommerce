import { useParams } from "react-router-dom"
import testData from "../data/test-data.json";
import ReviewItem from "../components/ReviewItem";

export default function Product() {
  const { handle } = useParams();
  const findProduct = (handle) => {
    return testData.find(product => product.handle === handle);
  }
  const { description, oldPrice, productTitle, newPrice, reviews } = findProduct(handle);
  return(
    <section>
      <div>
        <h1>{productTitle}</h1>
        <p>{description}</p>
        <div>
          <span>{newPrice}</span>
          <span>{oldPrice}</span>
        </div>
        <ul>
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
      </div>
    </section>
  )
}