import React from "react";

class ComponentDidMount extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Moloy",
      user:[]
    };
  }

  async componentDidMount(){
    let data=await fetch('https://jsonplaceholder.typicode.com/users')
    let result=await data.json();
    this.setState({user:result})

    console.log("componentdidmount")
  }
  render() {
    console.log("Render")
    return (
      <div>
        <button onClick={() => this.setState({ name:'Ram'})}>Click State Update</button>
        <p>{this.state.name}</p>
        <h1>Users List</h1>
        <ul>
            {
               this.state.user.map((users)=>{
                return <li key={users.id}>{users.name}</li>
               })
            }
        </ul>
      </div>
    );
  }
}

export default ComponentDidMount;
