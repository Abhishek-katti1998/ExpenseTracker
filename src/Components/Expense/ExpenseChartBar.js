import Chart from "../Chart/Chart";
function ExpensChartBar(props) {
  const data = [
    { label: "JAN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];
  props.data.forEach((el) => {
    data[el.date.getMonth()].value += el.amount;
  });
  console.log("data", data);
  return <Chart dataPoint={data} />;
}
export default ExpensChartBar;
