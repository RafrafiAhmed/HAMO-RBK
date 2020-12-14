import React, { Component } from "react";
import axios from "axios";
class Listregister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
    this.handelsubmit = this.handelsubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handelsubmit(e) {
    e.preventDefault();
    axios.post("/api/user", {name:this.state.name, password:this.state.password})
    .then(res => {
      console.log(res.data);

    })
    // $.ajax({
    //   type: "POST",
    //   data: { name: this.state.name, password: this.state.password },
    //   url: "/api/user"
    // });
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.name);
    console.log(this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handelsubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
          />
          <br /> <br />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Listregister;
