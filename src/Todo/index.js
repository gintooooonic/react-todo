import { useState } from "react";
import style from "./index.module.scss";
import Header from "../Header";
import List from "../List";

export default function Todo() {
  const [titleForm, setTitleForm] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "React 공부하기", done: false },
  ]);

  const handleTitleChange = (event) => {
    const { target } = event;
    setTitleForm(target.value);
  };

  const handleSubmit = (event) => {
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id: newId, title: titleForm, done: false };
    setTodos([...todos, newTodo]);
    setTitleForm("");
    event.preventDefault();
  };

  const handleCheck = (event) => {
    const id = event.target.id;
    const newTodos = todos.map((todo) => {
      if (todo.id === +id) return { ...todo, done: event.target.checked };
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = (event) => {
    const id = event.target.dataset.id;
    const newTodos = todos.filter((job) => job.id !== +id);
    setTodos(newTodos);
  };

  return (
    <div className={style.todo}>
      <Header title="TODO.app" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={titleForm}
          placeholder="할 일"
          onChange={handleTitleChange}
          required
        />
        <input type="submit" value="추가" />
      </form>
      <List
        todos={todos}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}
