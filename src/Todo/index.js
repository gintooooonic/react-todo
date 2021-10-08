import { Component } from "react";
import style from "./index.module.scss";
import List from "../List";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      jobs: [
        { title: "Node.js 공부하기" },
        { title: "Express 공부하기" },
        { title: "React 공부하기" },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    const job = { title: this.state.title };
    this.setState({ jobs: [...this.state.jobs, job] });
    this.setState({ title: "", due: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div className={style.todo}>
        <h1>리스트 1</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="할 일"
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="추가" onChange={this.handleTitleChange} />
        </form>
        <List jobs={this.state.jobs} />
      </div>
    );
  }
}
