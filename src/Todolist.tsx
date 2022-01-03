import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./component/CreateToDo";
import {
  Category,
  categoryState,
  toDoSelector,
  toDostate,
} from "./component/Atoms";
import Todo from "./component/Todo";

function Todolist() {
  //   const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //     setError,
  //   } = useForm<Iform>({
  //     defaultValues: { email: "@naver.com" },
  //   });
  //   const onValued = (data: Iform) => {
  //     if (data.password !== data.password1) {
  //       setError(
  //         "password1",
  //         { message: "password are not the saem" },
  //         { shouldFocus: true }
  //       );
  //     }
  // setError("extraerror", { message: "server down" });
  const todos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const oninput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form>
        <select value={category} onInput={oninput}>
          <option value={Category.To_Do}>To_Do</option>{" "}
          <option value={Category.Doing}>Doing</option>{" "}
          <option value={Category.Done}>Done</option>
        </select>
      </form>
      <CreateToDo />
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
export default Todolist;
