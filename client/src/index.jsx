import React, { Component } from "react";
import ReactDOM from "react-dom";
import Log from "./register/component1.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <h4>Ahmed</h4>
        <Log />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("myapp"));
