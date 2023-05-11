import ReviewItem from "./ReviewItem";
import './ReviewsList.css'

const ReviewsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="reviews-list__fallback">Не найдено отзывов.</h2>
  }

  return <ul className="reviews-list">
    {props.items.map((review) => (
      <ReviewItem
        key={review.id}
        title={review.title}
        artist={review.artist}
        rhyme_score={review.rhyme_score}
        structure_score={review.structure_score}
        implement_score={review.implement_score}
        identity_score={review.identity_score}
        vibe_score={review.vibe_score}
        trend_score={review.trend_score}
        genre={review.genre}
        review_score={review.review_score}
        cover={review.cover}
        type={review.type}
      />
    ))}
  </ul>
};

export default ReviewsList;
