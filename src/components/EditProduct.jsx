import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productContext } from "../context/ProductContextProvaider";
import { API } from "../helpers/const";
import { Button, TextField } from "@mui/material";

const EditProduct = () => {
  const { todoDetail, setTodoDetail } = useContext(productContext);
  const { id } = useParams();
  const [title, setTitle] = useState(todoDetail.todoName);
  const [last, setLast] = useState(todoDetail.todoLastname);
  const [number, setNumber] = useState(todoDetail.todoPhone);
  const [img, setImg] = useState(todoDetail.todoImg);

  useEffect(() => {
    getTodo(id);
  }, [id]);

  const getTodo = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    setTodoDetail(data);
    setTitle(data.todoName);
    setLast(data.todoLastname);
    setNumber(data.todoPhone);
    setImg(data.todoImg);
  };

  const handelClick = async () => {
    if (!title && !last && !number && !img) {
      return;
    }
    let newTodo = {
      todoName: title,
      todoLastname: last,
      todoPhone: number,
      todoImg: img,
    };

    await editTodo(id, newTodo);
  };

  const editTodo = async (id, newTodo) => {
    await axios.patch(`${API}/${id}`, newTodo);
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="input"
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setLast(e.target.value)}
        value={last}
        className="input"
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        className="input"
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setImg(e.target.value)}
        value={img}
        className="input"
      />
      <Link to="/">
        <Button
          onClick={() => {
            handelClick();
          }}
          variant="contained"
        >
          Save
        </Button>
      </Link>
    </div>
  );
};

export default EditProduct;
