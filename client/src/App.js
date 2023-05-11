import { useState } from "react";
import Reviews from "./components/Reviews/Reviews";
import NewReview from "./components/NewReview/NewReview";

import reviewsData from "./components/NewReview/reviews.json";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const [reviews, setReviews] = useState(reviewsData);

  const addReviewHandler = (review) => {
    setReviews(prevReviews => {
      return [review, ...prevReviews];
    });
  }

  const reviews_songs = reviews.filter((review) => {
    return review.type === "song";
  });

  const reviews_albums = reviews.filter((review) => {
    return review.type !== "song";
  });

  return (
    <div>
      <NewReview onAddReview={addReviewHandler} />
      <Reviews items={reviews_songs}/>
      <Reviews items={reviews_albums}/>
    </div>
  );
}

export default App;
