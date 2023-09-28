import React from "react";

const Users = (props) => {
  return (
    <>
      <td>{props.index}</td>
      <td>{props.data.name}</td>
      <td>{props.data.email}</td>
      <td>{props.data.contact}</td>
    </>
  );
};

export default Users;
