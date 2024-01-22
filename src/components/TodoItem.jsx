import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({
  todoName,
  todoPhone,
  todoImg,
  todoLastname,
  DeleteFunc,
  id,
}) => {
  return (
    <div className="containet_item">
      <div className="container">
        <div className="div">
          <img src={todoImg} alt="" className="img" />
          <h3>имя: {todoName}</h3>
          <h3>фамилия: {todoLastname}</h3>
          <h3>контакт: {todoPhone}</h3>
        </div>
      </div>
      <button onClick={() => DeleteFunc(id)} className="button">
        Delete
      </button>
      <Link to={`/edit/${id}`}>
        <button className="button">Edit</button>
      </Link>
    </div>
  );
};

export default TodoItem;
