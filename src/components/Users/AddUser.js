import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted!!!!");
  };
  return (
    <Card className={classes.input}>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName: </label>
          <input id="username" type="text" />
          <label htmlFor="age">Age (in Years): </label>
          <input id="age" type="number" />
          <Button type="submit">Add Users</Button>
        </form>
      </div>
    </Card>
  );
};

export default AddUser;
