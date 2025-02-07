import { todoReducer } from "../reducers/todoReducer";
import { useEffect, useReducer } from "react";

const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos) || []);
  }, [todos])

  const onNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const onDeleteTodo = (id) => {
    const action = {
      type: "Remove Todo",
      payload: id,
    };
    dispatch(action);
  };

  const onToggleTodo = (id) => {
    const action = {
      type: "Toggle Todo",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    onNewTodo,
    onToggleTodo,
    onDeleteTodo,
  };
};

export { useTodo };
