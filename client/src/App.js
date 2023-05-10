import { useState } from "react";
import Reviews from "./components/Reviews/Reviews";
import NewReview from "./components/NewReview/NewReview";

import reviewsData from "./components/NewReview/reviews.json";

// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', 
//     title: 'New TV', 
//     amount: 799.49, 
//     date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

// const DUMMY_REVIEWS = [
//   {
//     id: 'r1',
//     title: 'Red Moon In Venus',
//     artist: 'Kali Uchis',
//     rhyme_score: 9,
//     structure_score: 9,
//     implement_score: 9,
//     identity_score: 9,
//     vibe_score: 5,
//     trend_score: 5,
//     genre: 'r&b'
//   },{
//     id: 'r2',
//     title: 'Heroes & Villains',
//     artist: 'Metro Boomin',
//     rhyme_score: 9,
//     structure_score: 9,
//     implement_score: 9,
//     identity_score: 9,
//     vibe_score: 5,
//     trend_score: 5,
//     genre: 'hiphop'
//   },
// ];

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

  return (
    <div>
      <NewReview onAddReview={addReviewHandler} />
      <Reviews items={reviews}/>
    </div>
  );
}

export default App;
