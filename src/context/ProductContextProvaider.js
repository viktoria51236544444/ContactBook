import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../helpers/const";

export const productContext = createContext();
const ProductContecstProvader = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoDetail, setTodoDetail] = useState("");

  //! create
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };
  //! read
  const getTodos = async () => {
    try {
      const { data } = await axios(API);
      console.log(data);
      setTodos(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  //! delete
  const DeleteFunc = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      const del = todos.filter((elem) => elem.id !== id);
      setTodos(del);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    addTodo,
    getTodos,
    todos,
    DeleteFunc,
    todoDetail,
    setTodoDetail,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContecstProvader;
