import React from "react";
import { FirstName } from "./comOne";
import { Lastname } from "./comOne";

const ComThree = () => {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <Lastname.Consumer>
              {(lname) => {
                return (
                  <h2>
                    ComThree Component - {fname} {lname}
                  </h2>
                );
              }}
            </Lastname.Consumer>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
};

export default ComThree;
