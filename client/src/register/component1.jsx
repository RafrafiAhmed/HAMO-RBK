import React, { Component } from "react";
import Listregister from "./listregister.jsx";
import Vue from "./component2.jsx";
class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "all"
    };
    this.changeView = this.changeView.bind(this);
    this.handelstate = this.handelstate.bind(this);
  }
  handelstate(x) {
    this.setState({ view: x });
  }
 
  changeView() {
    if (this.state.view === "add") {
      return <Listregister />;
    } else if ((this.state.view = "vue")) {
      return <Vue />;
    }
  }
  

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.handelstate("add")}>
          Add user
        </button>
        <button type="button" onClick={() => this.handelstate("vue")}>
          List
        </button>
        {this.changeView()} 
      </div>
    );
  }
}

export default Log;
