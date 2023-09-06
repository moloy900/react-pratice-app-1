import "./App.css";
import React from "react";
import Condition from './components/condition'
import ApplyNew from './components/applynew'

export default function App(){
  return(
    <div className="App">
    <Condition/>
    <ApplyNew/>
    </div>
  )
}