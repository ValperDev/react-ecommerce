import "./ReviewItem.css";
import Star from "./icons/Star";

export default function ReviewItem({rating, reviewContent, reviewDate, reviewTitle, isRecommended, reviewerName}) {
  
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Star key={i} />);
  }

  return(
    <li className="review-card">
      <div className="reviewer-content">
        <strong className="reviewer__name">{reviewerName}</strong>
        {isRecommended ? <span className="reviewer__recommend">I recommend this product</span> : ""}
      </div>
      <div className="review-content">
        <div className="stars-container">
          {stars}
        </div>
        <div className="review-top">
          <div className="review__title">{reviewTitle}</div>
          <span className="review__date">{reviewDate}</span>
        </div>
        <p className="review__content">{reviewContent}</p>
      </div>
    </li>
  );
}