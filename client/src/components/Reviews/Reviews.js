import { useState } from "react";
import Card from "../UI/Card";
import ReviewsFilter from "./ReviewsFilter";
import "./Reviews.css";
import ReviewsList from "./ReviewsList";

function Reviews(props) {
  const [filteredAsc, setFilteredAsc] = useState("asc");
  //const [filteredGenre, setFilteredGenre] = useState("all");

  // const filterChangeHandler = (selectedGenre) => {
  //   setFilteredGenre(selectedGenre);
  // };

  const filterChangeHandler = (selectedOrder) => {
    setFilteredAsc(selectedOrder);
  };

  // const filteredReviews = props.items.filter((review) => {
  //   if (filteredGenre !== 'all') {
  //     return review.genre.toString() === filteredGenre;
  //   }
  //   return review;
  // });

  const filteredReviews = filteredAsc === 'desc' ? props.items.sort((a, b) => a.review_score - b.review_score) : props.items.sort((a, b) => b.review_score - a.review_score);

  return (
    <div>
      <Card className="reviews">
        <ReviewsFilter
          selected={filteredAsc}
          onChangeFilter={filterChangeHandler}
        />
        <ReviewsList items={filteredReviews} />
      </Card>
    </div>
  );
}

export default Reviews;
