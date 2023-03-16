import React from "react";

const data = [
  {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  },
  {
    name: "Jane Smith",
    age: 25,
    occupation: "Web Designer",
  },
  {
    name: "Bob Johnson",
    age: 40,
    occupation: "Project Manager",
  },
];

function Table() {
  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
