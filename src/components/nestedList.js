import React from "react";
import { Table } from "react-bootstrap";

const NestedList = () => {
    const users=[
        {name:'Moloy',email:'moloy@test.com',address:[
            {hm:'101',city:'Noida',country:'India'},
            {hm:'10',city:'Gurgaon',country:'India'},
            {hm:'23',city:'Noida',country:'India'},
            {hm:'45',city:'Delhi',country:'India'},
        ]},
        {
            name:'Ram',email:'ram@test.com',address:[
            {hm:'10',city:'Noida',country:'India'},
            {hm:'101',city:'Noida',country:'India'},
            {hm:'10',city:'Noida',country:'India'},
            {hm:'10',city:'Noida',country:'India'},
            ]
        },
        {
            name:'Sam',email:'sam@test.com',address:[
            {hm:'15',city:'Noida',country:'India'},
            {hm:'10',city:'Mumbai',country:'India'},
            {hm:'103',city:'Noida',country:'India'},
            {hm:'1',city:'Kolkata',country:'India'},
            ]
        }
    ]
  return (
    <div>
      <h2>NestedList Component</h2>
      <Table variant="dark" striped>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user,index)=>
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Table variant="dark">
                                <tbody>
                                    {
                                        user.address.map((map, i)=>
                                            <tr key={i}>
                                                <td>{map.hm}</td>
                                                <td>{map.city}</td>
                                                <td>{map.country}</td>
                                            </tr> 
                                        )
                                    }
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                )
            }
        </tbody>

      </Table>
    </div>
  );
};

export default NestedList;
