import './ReviewsFilter.css';

const ReviewsFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Фильтр по жанрам</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value='all'>Все</option>
          <option value='hiphop'>Hip-hop</option>
          <option value='r&b'>R&B</option>
          <option value='pop'>Pop</option>
          <option value='alternative'>Alternative</option>
          <option value='rock'>Rock</option>
        </select>
      </div>
    </div>
  );
};

export default ReviewsFilter;