import style from "./index.module.scss";

export default function List(props) {
  const notDoneFirst = (a, b) => (a.done ? !b.done : -b.done);
  const jobs = [...props.jobs].sort(notDoneFirst);
  const listItems = jobs.map((job) => (
    <ListItem
      key={job.id}
      job={job}
      handleCheck={props.handleCheck}
      handleDelete={props.handleDelete}
    />
  ));
  return <ul className={style.list}>{listItems}</ul>;
}

function ListItem(props) {
  return (
    <li data-done={props.job.done}>
      <input
        type="checkbox"
        id={props.job.id}
        checked={props.job.done}
        onChange={props.handleCheck}
      />
      <label htmlFor={props.job.id}>{props.job.title}</label>
      <button type="button" data-id={props.job.id} onClick={props.handleDelete}>
        ✖
      </button>
    </li>
  );
}
