import React, { ReactEventHandler, useState } from "react";

function Todolist() {
  const [todo, setTodo] = useState("");
  const onchange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onchange} value={todo} placeholder="write a to do" />
        <button>add</button>
      </form>
    </div>
  );
}
export default Todolist;
