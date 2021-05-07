import "./Filter.css";
function Filter(props) {
  const selectHandler = (e) => {
    console.log(e.target.value);
    const val = props.filterFunction(e.target.value);
    console.log(val);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectHandler}>
          <option>Select</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
        </select>
      </div>
    </div>
  );
}
export default Filter;
