import Card from "../UI/Card";
import "./ReviewItem.css";
import cover from "../../covers/cover.png"

function ReviewItem(props) {

  return (
    <li>
      <Card className="expense-item">
        {(() => {
            if(props.cover !== ''){
              return (
                <img className="expense-item__cover" src={props.cover} alt="new"/>
             )
            } else {
              return (
                <img className="expense-item__cover" src={cover} alt="new"/>
              )
            }
        })()}
        <div className="expense-item__description">
          <div className="review-item__info">
            <h2 className="review-item__title">{props.title}</h2>
            <h2 className="review-item__artist">{props.artist}</h2>
          </div>
          {(() => {
            if(props.review_score === 90){
              return (
                <div className="expense-item__price highest"><p>{props.review_score}</p></div>
             )
            } else if (props.review_score >= 60) {
              return (
                <div className="expense-item__price high"><p>{props.review_score}</p></div>
              )
            } else if (props.review_score < 60 && props.review_score >= 30) {
              return (
                <div className="expense-item__price medium"><p>{props.review_score}</p></div>
             )
            } else {
              return (
                <div className="expense-item__price low"><p>{props.review_score}</p></div>
             )
            }
          })()}
        </div>
      </Card>
    </li>
  );
}

export default ReviewItem;
