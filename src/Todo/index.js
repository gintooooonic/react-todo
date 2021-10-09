import { Component } from "react";
import style from "./index.module.scss";
import List from "../List";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      jobs: [
        { id: 1, title: "Node.js 공부하기", done: true },
        { id: 2, title: "Express 공부하기", done: false },
        { id: 3, title: "React 공부하기", done: false },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    const id = this.state.jobs[this.state.jobs.length - 1].id + 1;
    const job = { id, title: this.state.title };
    this.setState({ jobs: [...this.state.jobs, job] });
    this.setState({ title: "" });
    event.preventDefault();
  }

  handleCheck(event) {
    const id = event.target.id;
    const jobs = [...this.state.jobs];
    jobs.forEach((job) => {
      if (job.id === +id) job.done = !job.done;
    });
    this.setState({ jobs: jobs });
  }

  handleDelete(event) {
    const id = event.target.dataset.id;
    const jobs = this.state.jobs.filter((job) => job.id !== +id);
    this.setState({ jobs: jobs });
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
        <List
          jobs={this.state.jobs}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
