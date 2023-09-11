import "./App.css";
import React from "react";
import ShouldComponentUpdate from "./life-cycle-methods/shouldcomponentupdate";


export default function App(){
  return(
    <div className="App">
      <ShouldComponentUpdate/>
    </div>
  )
}