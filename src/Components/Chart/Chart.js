import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  let maxArr = [];
  props.dataPoint.forEach((el) => {
    maxArr.push(el.value);
  });
  let maxVal = Math.max(...maxArr);
  return (
    <div className="chart">
      {props.dataPoint.map((el) => (
        <ChartBar
          value={el.value}
          label={el.label}
          id={el.label}
          maxValue={maxVal}
        />
      ))}
    </div>
  );
}
export default Chart;
