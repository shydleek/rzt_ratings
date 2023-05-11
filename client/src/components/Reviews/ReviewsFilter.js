import './ReviewsFilter.css';

const ReviewsFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }

  // return (
  //   <div className='reviews-filter'>
  //     <div className='reviews-filter__control'>
  //       <label>Фильтр по жанрам</label>
  //       <select value={props.selected} onChange={filterChangeHandler}>
  //         <option value='all'>Все</option>
  //         <option value='hiphop'>Hip-hop</option>
  //         <option value='r&b'>R&B</option>
  //         <option value='pop'>Pop</option>
  //         <option value='alternative'>Alternative</option>
  //         <option value='rock'>Rock</option>
  //       </select>
  //     </div>
  //   </div>
  // );

  return (
    <div className='reviews-filter'>
      <div className='reviews-filter__control'>
        <label>Фильтр по оценке</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value='asc'>По возрастанию</option>
          <option value='desc'>По убыванию</option>
        </select>
      </div>
    </div>
  );
};

export default ReviewsFilter;