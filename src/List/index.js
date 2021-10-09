import style from "./index.module.scss";

export default function List(props) {
  const notDoneFirst = (a, b) => (a.done ? !b.done : -b.done);
  const jobs = [...props.jobs].sort(notDoneFirst);
  const listItems = jobs.map((job, idx) => <ListItem key={idx} job={job} />);
  return <ul className={style.list}>{listItems}</ul>;
}

function ListItem(props) {
  return (
    <li>
      <input type="checkbox" checked={props.job.done} />
      {props.job.title}
    </li>
  );
}
