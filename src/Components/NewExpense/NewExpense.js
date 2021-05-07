import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm publisher={props.subscriber} show={props.show} />
    </div>
  );
};
export default NewExpense;
