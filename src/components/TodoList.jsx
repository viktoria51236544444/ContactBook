import { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvaider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { getTodos, todos, DeleteFunc, editTodo } = useContext(productContext);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos.map((elem) => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          todoName={elem.todoName}
          todoPhone={elem.todoPhone}
          todoImg={elem.todoImg}
          todoLastname={elem.todoLastname}
          DeleteFunc={DeleteFunc}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
