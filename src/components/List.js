import React from "react";

const data = [
  {
    title: "Task 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non leo ultrices, tincidunt velit eget, tristique dolor. Vestibulum vel turpis quis ante tincidunt tempus. Sed eu eleifend velit.",
  },
  {
    title: "Task 2",
    description:
      "Praesent maximus sapien sit amet congue pretium. Etiam bibendum neque in turpis rutrum convallis. Curabitur vitae ullamcorper ante. Integer nec leo nec massa lacinia facilisis.",
  },
  {
    title: "Task 3",
    description:
      "Fusce finibus, mauris vel bibendum suscipit, metus justo iaculis est, eget molestie enim libero et arcu. Curabitur imperdiet malesuada enim a venenatis. Nulla aliquam, purus a tristique ullamcorper, ex mauris viverra sem, nec ullamcorper augue elit non risus.",
  },
];

function List() {
  return (
    <div>
      <h1>List</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
