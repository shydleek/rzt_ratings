import { useState } from 'react';
import ReviewForm from './ReviewForm';
import './NewReview.css'

function NewReview(props) {
    const [isEditing, setIsEditing] = useState(false);

    const saveReviewDataHandler = (enteredReviewData) => {
        props.onAddReview(enteredReviewData);

        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Добавить новый отзыв</button>}
            {isEditing && <ReviewForm onSaveReviewData={saveReviewDataHandler} onStop={stopEditingHandler} />}
        </div>
    )
}

export default NewReview;