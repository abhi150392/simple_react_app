import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enterAge, setEnteredAge] = useState("");
  const [error, seterror] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enterAge.trim().length === 0) {
      seterror({
        name: "Invalid Input!!",
        msg: "Please enter name and age.",
      });
      return;
    }
    if (+enterAge < 1) {
      seterror({
        name: "Invalid age!!",
        msg: "Please enter valid age.",
      });
      return;
    }

    // console.log(enteredUserName, enterAge);
    props.onAddUser(enteredUserName, enterAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    seterror(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <div>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName: </label>
            <input
              id="username"
              type="text"
              value={enteredUserName}
              onChange={userNameHandler}
            />
            <label htmlFor="age">Age (in Years): </label>
            <input
              id="age"
              type="number"
              value={enterAge}
              onChange={ageHandler}
            />
            <Button type="submit">Add Users</Button>
          </form>
        </div>
      </Card>
    </>
  );
};

export default AddUser;
