import {Button, Table} from 'react-bootstrap'

const MapFunc = () => {
  const students = [
    { name: "Moloy", age: 35 },
    { name: "Ram", age: 32 },
    { name: "Sam", age: 38 },
    { name: "Jadhu", age: 39 },
    { name: "Madhu", age: 38 },
  ];

  return (
    <div>
      <h3>Map Function</h3>
      <Table variant='dark' striped>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stuName, stuIndex) => (
            stuName.age>=36 ?
            <tr key={stuIndex}>
              <td>{stuIndex}</td>
              <td>{stuName.name}</td>
              <td>{stuName.age}</td>
            </tr>:null
          ))}
        </tbody>
      </Table>

      <Button variant="dark">Click Me</Button>
    </div>
  );
};

export default MapFunc;
