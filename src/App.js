import React, { Component } from "react";
import Datepicker from "./components/Datepicker";

class App extends Component {
  render() {
    return (
      <div className="w-25 py-5 my-5 mx-auto" style={{ minWidth: "60%" }}>
        <Datepicker label="Birthday" value="2000-08-15" />
      </div>
    );
  }
}

export default App;
