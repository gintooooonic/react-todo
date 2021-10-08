import style from "./index.module.scss";

export default function List(props) {
  const listItems = props.jobs.map((job, idx) => (
    <ListItem key={idx} job={job} />
  ));
  return <ul className={style.list}>{listItems}</ul>;
}

function ListItem(props) {
  return <li>{props.job.title}</li>;
}
