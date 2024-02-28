import "./ReviewItem.css";
import Star from "./icons/Star";

export default function ReviewItem({rating, reviewContent, reviewDate, reviewTitle, isRecommended, reviewerName}) {
  return(
    <li className="review-card">
      <div className="reviewer-content">
        <strong className="reviewer__name">{reviewerName}</strong>
        {isRecommended ? <span className="reviewer__recommend">I recommend this product</span> : ""}
      </div>
      <div className="review-content">
        <div className="stars-container">
          <Star fill={`--yellow`}/>
        </div>
        <div className="review-top">
          <h2 className="review__title">{reviewTitle}</h2>
          <span className="review__name">{reviewDate}</span>
        </div>
        <p className="review__content">{reviewContent}</p>
      </div>
    </li>
  );
}