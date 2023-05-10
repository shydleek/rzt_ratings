import { useState } from "react";
import Card from "../UI/Card";
import ReviewsFilter from "./ReviewsFilter";
import "./Reviews.css";
import ReviewsList from "./ReviewsList";

function Reviews(props) {
  const [filteredGenre, setFilteredGenre] = useState("all");

  const filterChangeHandler = (selectedGenre) => {
    setFilteredGenre(selectedGenre);
  };

  const filteredReviews = props.items.filter((review) => {
    if (filteredGenre !== 'all') {
      return review.genre.toString() === filteredGenre;
    }
    return review;
  });

  return (
    <div>
      <Card className="expenses">
        <ReviewsFilter
          selected={filteredGenre}
          onChangeFilter={filterChangeHandler}
        />
        <ReviewsList items={filteredReviews} />
      </Card>
    </div>
  );
}

export default Reviews;
