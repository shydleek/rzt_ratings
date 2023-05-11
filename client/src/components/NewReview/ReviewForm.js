import { useState } from 'react';
import './ReviewForm.css'

function ReviewForm(props) {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredArtist, setEnteredArtist] = useState('');
    // const [enteredRhymeScore, setEnteredRhymeScore] = useState('');
    // const [enteredStructureScore, setEnteredStructureScore] = useState('');
    // const [enteredImplementScore, setEnteredImplementScore] = useState('');
    // const [enteredIdentityScore, setEnteredIdentityScore] = useState('');
    // const [enteredVibeScore, setEnteredVibeScore] = useState('');
    // const [enteredTrendScore, setEnteredTrendScore] = useState('');
    // const [enteredGenre, setEnteredGenre] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredArtist: '',
        enteredRhymeScore: '5',
        enteredStructureScore: '5',
        enteredImplementScore: '5',
        enteredIdentityScore: '5',
        enteredVibeScore: '2',
        enteredTrendScore: '2',
        enteredGenre: '',
        enteredType: ''
    });

    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value);
        // # Alternative way №1
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
        // # Alternative way №2
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    }

    const artistChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredArtist: event.target.value
        });
    }

    const rhymeScoreChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredRhymeScore: event.target.value
        });
    }

    const structureScoreChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredStructureScore: event.target.value
        });
    }

    const implementScoreChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredImplementScore: event.target.value
        });
    }

    const identityScoreChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredIdentityScore: event.target.value
        });
    }

    const vibeScoreChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredVibeScore: event.target.value
        });
    }

    const trendScoreChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTrendScore: event.target.value
        });
    }

    const genreChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredGenre: event.target.value
        });
    }

    const typeChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredType: event.target.value
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const review_score_main = Number(userInput.enteredRhymeScore) + Number(userInput.enteredStructureScore) + Number(userInput.enteredImplementScore) + Number(userInput.enteredIdentityScore);
        
        const review_score_vibe = (review_score_main)*(Number(userInput.enteredVibeScore))/10;

        console.log(review_score_vibe);

        const review_score_trend = (review_score_main+review_score_vibe)*(Number(userInput.enteredTrendScore))/10;

        console.log(review_score_trend);

        const review_score = Math.round(review_score_main + review_score_vibe + review_score_trend);
        
        console.log(review_score);

        const reviewData = {
            id: Math.random().toString(),
            title: userInput.enteredTitle,
            artist: userInput.enteredArtist,
            rhyme_score: Number(userInput.enteredRhymeScore),
            structure_score: Number(userInput.enteredStructureScore),
            implement_score: Number(userInput.enteredImplementScore),
            identity_score: Number(userInput.enteredIdentityScore),
            vibe_score: Number(userInput.enteredVibeScore),
            trend_score: Number(userInput.enteredTrendScore),
            genre: userInput.enteredGenre,
            review_score: review_score,
            cover: "",
            type: userInput.enteredType
        }

        fetch("/api/data", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

        console.log(reviewData);

        props.onSaveReviewData(reviewData);
        setUserInput({
            enteredTitle: '',
            enteredArtist: '',
            enteredRhymeScore: '5',
            enteredStructureScore: '5',
            enteredImplementScore: '5',
            enteredIdentityScore: '5',
            enteredVibeScore: '2',
            enteredTrendScore: '2',
            enteredGenre: '',
            enteredType: ''
        });
    };

    

    return (
        <form onSubmit={submitHandler}>
            <div className='new-review__controls'>
                <div className='new-review__control'>
                    <label>Название</label>
                    <input type='text' value={userInput.enteredTitle} required onChange={titleChangeHandler} />
                </div>
                <div className='new-review__control'>
                    <label>Артист</label>
                    <input type='text' value={userInput.enteredArtist} required onChange={artistChangeHandler} />
                </div>
                <div className='new-review__control'>
                    <label>Рифмы/Образы</label>
                    <input className='new-review__slider' type='range' min='1' max='10' value={userInput.enteredRhymeScore} required onChange={rhymeScoreChangeHandler} onInput="num.value = this.value"/>
                    <output id="num" className='output'>{userInput.enteredRhymeScore}</output>
                </div>
                <div className='new-review__control'>
                    <label>Структура/Ритмика</label>
                    <input className='new-review__slider' type='range' min='1' max='10' step='1' value={userInput.enteredStructureScore} required onChange={structureScoreChangeHandler} onInput="num.value = this.value"/>
                    <output id="num" className='output'>{userInput.enteredStructureScore}</output>
                </div>
                <div className='new-review__control'>
                    <label>Реализация выбранного стиля</label>
                    <input className='new-review__slider' type='range' min='1' max='10' step='1' value={userInput.enteredImplementScore} required onChange={implementScoreChangeHandler} onInput="num.value = this.value"/>
                    <output id="num" className='output'>{userInput.enteredImplementScore}</output>
                </div>
                <div className='new-review__control'>
                    <label>Индивидуальность/Харизма</label>
                    <input className='new-review__slider' type='range' min='1' max='10' step='1' value={userInput.enteredIdentityScore} required onChange={identityScoreChangeHandler} onInput="num.value = this.value"/>
                    <output id="num" className='output'>{userInput.enteredIdentityScore}</output>
                </div>
                <div className='new-review__control'>
                    <label>Атмосфера/Вайб</label>
                    <input className='new-review__slider' type='range' min='1' max='5' step='1' value={userInput.enteredVibeScore} required onChange={vibeScoreChangeHandler} onInput="num.value = this.value"/>
                    <output id="num" className='output'>{userInput.enteredVibeScore}</output>
                </div>
                <div className='new-review__control'>
                    <label>Трендовость/Актуальность Жанра</label>
                    <input className='new-review__slider' type='range' min='1' max='5' step='1' value={userInput.enteredTrendScore} required onChange={trendScoreChangeHandler} onInput="num.value = this.value"/>
                    <output id="num" className='output'>{userInput.enteredTrendScore}</output>
                </div>
                <div className='new-review__select'>
                    <div className='new-review__control'>
                        <label htmlFor="genre-select">Жанр</label>
                        <select name="genres" id="genre-select" onChange={genreChangeHandler} required value={userInput.enteredGenre}>
                            <option value="" hidden disabled selected>Выбрать</option>
                            <option value="hiphop">Hip-Hop</option>
                            <option value="r&b">R&B</option>
                            <option value="pop">Pop</option>
                            <option value="alternative">Alternative</option>
                            <option value="rock">Rock</option>
                        </select>
                    </div>
                    <div className='new-review__control'>
                        <label htmlFor="music-select">Тип</label>
                        <select name="type" id="music-select" onChange={typeChangeHandler} required value={userInput.enteredType}>
                            <option value="" hidden disabled selected>Выбрать</option>
                            <option value="song">Песня</option>
                            <option value="ep">EP</option>
                            <option value="album">Альбом</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='new-review__actions'>
                <button type='button' onClick={props.onStop}>Отменить</button>
                <button type='submit'>Добавить отзыв</button>
            </div>
        </form>
    )
}

export default ReviewForm;