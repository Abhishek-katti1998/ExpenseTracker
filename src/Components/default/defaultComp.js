import React, { useState } from "react";
import "./defaultComp.css";
function DefaultComp(props) {
  const [showForm, setShowForm] = useState(true);
  const showFormHandler = () => {
    setShowForm(false);
  };
  props.liftShow(showForm);
  return (
    <div className="def-expense">
      <button onClick={showFormHandler}>Add Expense</button>
    </div>
  );
}
export default DefaultComp;
