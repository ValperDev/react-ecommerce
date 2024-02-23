export default function ReviewItem({rating, reviewContent, reviewDate, reviewTitle, isRecommended, reviewerName}) {
  return(
    <li>
      <div>
        <span>{reviewerName}</span>
        {isRecommended ? <span>I recommend this product</span> : ""}
      </div>
      <div>
        <div>
          <h2>{reviewTitle}</h2>
          <span>{reviewDate}</span>
        </div>
        <p>{reviewContent}</p>
      </div>
    </li>
  );
}