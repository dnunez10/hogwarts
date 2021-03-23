import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Filter from './Filter'

class App extends Component {  
  render() {
    return (
      <div className="App">
        <Nav />
        <Filter />
        <HelloWorld hogsData={hogs} />    
      </div>
    );
  }
}

export default App;
