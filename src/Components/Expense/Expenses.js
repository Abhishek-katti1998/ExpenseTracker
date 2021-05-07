import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
function Expenses(props) {
 
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date() },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(),
    },
  ];
  // const newExp=props.fun(expenses)
  // const [expenses,setExpense]=useState([{date:'',amount:null,title=''}])

  const renderArray = expenses.map((el) => {
    return (
      <ExpenseItem
        id={el.id}
        date={el.date}
        amount={el.amount}
        title={el.title}
      />
    );
  });
  console.log(renderArray);
  return <Card className="expenses">{renderArray}</Card>;
}
export default Expenses;
