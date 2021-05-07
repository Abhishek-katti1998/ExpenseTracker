import React, { useState, useEffect } from "react";
import "./App.css";

// import Expenses from "./Components/Expense/Expenses";
import ExpenseItem from "./Components/Expense/ExpenseItem";
import Card from "./Components/UI/Card";
import "./Components/Expense/Expenses.css";
import NewExpense from "./Components/NewExpense/NewExpense";
import DefaultComp from "./Components/default/defaultComp";
import Filter from "./Components/Filter/Filter";
import ExpensChartBar from "./Components/Expense/ExpenseChartBar";
import { render } from "@testing-library/react";
function App() {
  let newExpenses;
  let renderArray, filterArray;
  let filterExpense;
  let renderFilterArray;

  let expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date() },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2020, 7, 14),
    },
  ];

  const [newExp, setExp] = useState(expenses);
  const [showNewExpense, setShowNewExpense] = useState(false);
  const [filterExp, setFilterExp] = useState(null);
  const [all, setAll] = useState(true);
  const renderExpense = function (arg) {
    if (arg.length === 0) return <h3>Found no expenses ;(</h3>;
    return arg.map((el) => {
      return (
        <ExpenseItem
          key={el.id}
          date={el.date}
          amount={el.amount}
          title={el.title}
        />
      );
    });
  };
  const appendNewExpense = (parameters) => {
    const newParm = {
      ...parameters,
      id: `${Math.trunc(Math.random() * 100)}`,
      date: new Date(parameters.date),
    };
    setExp([newParm, ...newExp]);
  };
  const filterFunc = (dateFilter) => {
    if (dateFilter === "Select") {
      setAll(true);
      return;
    } else {
      setAll(false);
      filterArray = [...newExp];
      filterExpense = filterArray.filter((el) => {
        return el.date.getFullYear() === +dateFilter;
      });
      console.log(filterExpense);
      setFilterExp(filterExpense);
    }
  };

  renderArray = renderExpense(newExp);
  if (filterExp) {
    renderFilterArray = renderExpense(filterExp);
  }
  const subscriber = (para) => {
    console.log(para);
    if (!para) {
      setShowNewExpense(true);
    }
  };
  return (
    <div className="App">
      {showNewExpense ? (
        <NewExpense subscriber={appendNewExpense} show={showNewExpense} />
      ) : (
        <DefaultComp liftShow={subscriber} />
      )}
      {/* <Chart /> */}

      <Card className="expenses">
        <Filter filterFunction={filterFunc} />
        {all ? (
          <ExpensChartBar data={newExp} />
        ) : (
          <ExpensChartBar data={filterExp} />
        )}
        {filterExp && !all ? renderFilterArray : renderArray}
      </Card>
      {/* <Expenses fun={subscribeNewExpense} /> */}
    </div>
  );
}

export default App;
