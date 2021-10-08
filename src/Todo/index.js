import { Component } from "react";

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
      <div>
        <h1>할 일</h1>
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
        <ul>
          {this.state.jobs.map((job, idx) => (
            <li key={idx}>{job.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
