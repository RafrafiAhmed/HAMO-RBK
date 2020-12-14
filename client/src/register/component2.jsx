import React, { Component } from "react";
import axios from "axios";
class Vue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "ahmed", role: "register" },
        { name: "oucema", role: "register" },
        { name: "Hiba", role: "register" }
      ]
    };
    this.handelsubmit = this.handelsubmit.bind(this);
  }
  componentDidMount(){
    axios.get("/api/user")
    .then((res)=>{
      this.setState({
        data:res.data
      })
    })
  }

  handelsubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log("hello");
  }

  render() {
    return (
      <div>
        {this.state.data.map((element, index) => {
          return (
            <div key={index}>
              <p>{element.name}</p>
              <p>{element.role}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Vue;
