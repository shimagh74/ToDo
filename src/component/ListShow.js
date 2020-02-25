import React from "react";

export default props => (
  <div
    style={{ color: props.todo.done ? "blue" : "" }}
    onClick={props.handleDone}
  >
    {" "}
    {props.todo.text}{" "}
  </div>
);

