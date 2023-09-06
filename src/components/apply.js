import React, { useState } from "react";

const Apply = () => {
  const [name, setName] = useState("");
  const [select, setSelect] = useState("");
  const [check, setCheck] = useState("");
  const [show,setShow]=useState(null)

  const formSubmit = (e) => {
    console.log(name, select, check);
    e.preventDefault();
  };

  const showSubmitVal=(a)=>{
    setShow(a)
  }

  return (
    <div>
      <h1>Apply component</h1>
     
      <form onSubmit={formSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <select name="course" onChange={(e) => setSelect(e.target.value)}>
            <option value="Select Course">Select Course</option>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="NodeJs">NodeJs</option>
            <option value="Javascript">Javascript</option>
            <option value="TypeScript">TypeScript</option>
          </select>
        </div>

        <div>
          <input type="checkbox" onChange={(e) => setCheck(e.target.value)} />
          <span>Accept Term and Conditions</span>
        </div>
        <button onClick={()=>showSubmitVal(!show)}>Submit</button>
      </form>
      {
            show? <div><ul><li>{name}</li><li>{select}</li><li>{check}</li></ul></div> : null
        }
      
    </div>
  );
};

export default Apply;
