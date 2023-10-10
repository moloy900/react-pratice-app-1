import React, { createContext } from "react";
import ComThree from "./comThree";

export const FirstName = createContext();
export const Lastname = createContext();

const ComOne = () => {
  const fname = "My Name is Moloy";
  const lname = "My Surname is Nath";
  return (
    <div>
      <h1>ComOne Component</h1>
      <FirstName.Provider value={fname}>
        <Lastname.Provider value={lname}>
          <ComThree />
        </Lastname.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default ComOne;
