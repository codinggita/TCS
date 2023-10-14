import React from "react";
import "./ExpenseCalculator.css";

let expenseData = [];

const ExpenseCal = () => {
  return (
    <div className="container">
      <div className="heading">
        <h4>Courier expense</h4>
      </div>
      <div className="form">
        <form action="">
          <div className="left">
            <label htmlFor="weight">Enter Weight</label>
            <br />
            <input type="number" name="weight" />
            <br />
            <label htmlFor="size">Enter Size</label>
            <br />
            <input type="number" name="seize" />
            <br />
            <label htmlFor="from">From Pincod</label>
            <br />
            <input type="number" name="from" />
            <br />
            <label htmlFor="to">To Pincod</label>
            <br />
            <input type="number" name="weight" />
            <br />
          </div>
          <div className="rightr">
            <p>Choose Pakage</p>
            <input type="radio" name="" id="" />
            <label htmlFor="Yearly">Yearly</label>
            <input type="radio" name="" id="" />
            <label htmlFor="Monthly">Monthly</label>
            <input type="radio" name="" id="" />
            <label htmlFor="Once">Once</label>
            <p>Choose Service</p>
            <input type="radio" name="" id="" />
            <label htmlFor="Yearly">Simple post</label>
            <input type="radio" name="" id="" />
            <label htmlFor="Monthly">Special post</label>
            <input type="radio" name="" id="" />
            <label htmlFor="Once">Speed Post</label>
          </div>

          <br />
          <button>Enter</button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseCal;
