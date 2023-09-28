import React from "react";
import Users from "./users";
import { Table } from "react-bootstrap";

const Reuse = () => {
  const user = [
    { name: "Moloy", email: "moloy@gmail.com", contact: 785632236 },
    { name: "Ram", email: "ram@gmail.com", contact: 569633254 },
    { name: "sam", email: "sam@test.com", contact: 458756323 },
    { name: "Jadhu", email: "jadhu@gmail.com", contact: 45899636 },
  ];
  return (
    <div>
      <h3>Reuse Component</h3>
      <Table variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
            {user.map((user, i) => (
                <tr>
              <Users data={user} index={i}/>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Reuse;
