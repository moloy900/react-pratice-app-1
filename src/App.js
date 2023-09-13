import "./App.css";
import React from "react";
import GetSnapshotBeforeUpdate from "./life-cycle-methods/getsnapshotbeforeupdate";


export default function App(){
  return(
    <div className="App">
      <GetSnapshotBeforeUpdate/>
    </div>
  )
}