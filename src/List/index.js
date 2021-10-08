import style from "./index.module.scss";

export default function List(props) {
  return (
    <ul className={style.list}>
      {props.jobs.map((job, idx) => (
        <li key={idx}>{job.title}</li>
      ))}
    </ul>
  );
}
