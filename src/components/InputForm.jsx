import React, { useState } from "react";
import "./InputForm.css";
import Card from "./Card/Card";
import ListItem from "./List/ListItem";
import Overlay from "./Overlay";

const InputForm = () => {
  const [enteredAgeValue, setEnteredAge] = useState("");
  const [enteredNameValue, setEnteredName] = useState("");
  const [listData, setListData] = useState([]);
  const [errorHandler, setErrorHandler] = useState("notvis");

  const listDataHandler = (event) => {
    event.preventDefault();
    if (!enteredAgeValue || !enteredNameValue) return setErrorHandler("vis");
    setErrorHandler("notvis");
    const data = {
      name: enteredNameValue,
      age: enteredAgeValue,
      key: Math.random() * 100000,
    };
    setListData([data, ...listData]);
  };

  const ageValueHandler = (event) => setEnteredAge(event.target.value);

  const nameValueHandler = (event) => setEnteredName(event.target.value);

  return (
    <>
      <Card>
        <form onSubmit={listDataHandler} className="input-form">
          <figure className="_name">
            <label>Name</label>
            <input
              type="text"
              value={enteredNameValue}
              onChange={nameValueHandler}
            />
          </figure>
          <figure className="age">
            <label>Age (Years)</label>
            <input
              type="number"
              value={enteredAgeValue}
              onChange={ageValueHandler}
            />
          </figure>
          <button type="submit">Submit</button>
        </form>
      </Card>
      <ListItem listData={listData}></ListItem>
      <Overlay visability={errorHandler}></Overlay>
    </>
  );
};

export default InputForm;
