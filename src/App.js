import React from "react";
import "./App.css";
import Gri from "./components/Grids";
import SearchAppBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello From Gopal</h1> */}
      <SearchAppBar />
      <Gri />
    </div>
  );
}

export default App;
