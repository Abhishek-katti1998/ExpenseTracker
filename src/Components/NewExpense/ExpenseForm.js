import React, { useState } from "react";
import "./ExpenseForm.css";
// import "./NewExpense.css";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleHandler = (event) => {
    // console.log(event.target.value);
    setUserInput({ ...userInput, title: event.target.value });
  };
  const amountHandler = (event) => {
    setUserInput({ ...userInput, amount: event.target.value });
  };
  const dateHandler = (event) => {
    // console.log(event.target.value);
    setUserInput({ ...userInput, date: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.publisher(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
