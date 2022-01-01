import React, { ReactEventHandler, useState } from "react";
import { useForm } from "react-hook-form";

// function Todolist() {
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onchange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodoError("");
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (todo.length < 10) {
//       return setTodoError("To do should be longer");
//     }
//     console.log("submit");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onchange} value={todo} placeholder="write a to do" />
//         <button>add</button>
//         {todoError !== "" ? todoError : null}
//       </form>
//     </div>
//   );
// }
interface Iform {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  password1: string;
}

function Todolist() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Iform>({
    defaultValues: { email: "@naver.com" },
  });
  const onValued = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValued)}
      >
        <input
          {...register("email", {
            required: "email required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver Email please",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "Email required",
            minLength: { value: 10, message: "write 10word please" },
          })}
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: true })}
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("password", { required: true })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", { required: true })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>add</button>
      </form>
    </div>
  );
}
export default Todolist;
