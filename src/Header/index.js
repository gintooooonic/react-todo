import style from "./index.module.scss";

export default function Header(props) {
  return (
    <header className={style.header}>
      <h1>📝 {props.title}</h1>
    </header>
  );
}
