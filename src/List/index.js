import style from "./index.module.scss";

export default function List(props) {
  const notDoneFirst = (a, b) => (a.done ? !b.done : -b.done);
  const todos = [...props.todos].sort(notDoneFirst);
  const listItems = todos.map((todo) => (
    <ListItem
      key={todo.id}
      todo={todo}
      handleCheck={props.handleCheck}
      handleDelete={props.handleDelete}
    />
  ));
  return <ul className={style.list}>{listItems}</ul>;
}

function ListItem(props) {
  return (
    <li data-done={props.todo.done}>
      <input
        type="checkbox"
        id={props.todo.id}
        checked={props.todo.done}
        onChange={props.handleCheck}
      />
      <label htmlFor={props.todo.id}>{props.todo.title}</label>
      <button
        type="button"
        data-id={props.todo.id}
        onClick={props.handleDelete}
      >
        ✖
      </button>
    </li>
  );
}
