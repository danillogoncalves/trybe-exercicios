import React from "react";

const Task = ({list}) => {
  // const list = value.list
  const listItem = list.map((text) => {
    return <li>{text}</li>
  });
  return (
    <ul>{listItem}</ul>
    // <li>{value.text}</li>
  );
}

export default Task;