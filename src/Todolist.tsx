import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./component/CreateToDo";
import {
  Category,
  categoryState,
  customCategoryState,
  toDoSelector,
  toDostate,
} from "./component/Atoms";
import Todo from "./component/Todo";
import CreateCategory from "./component/CreateCategory";

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
  const customcategoryState = useRecoilValue(customCategoryState);
  const [category, setCategory] = useRecoilState(categoryState);
  const oninput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(customcategoryState);
  const key = ["1", "2", "3"];
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form>
        <select value={category} onInput={oninput}>
          <option value={Category.To_Do}>{Category.Done}</option>{" "}
          <option value={Category.Doing}>{Category.Doing}</option>{" "}
          <option value={Category.Done}>{Category.Done}</option>
          {customcategoryState.map((key) => (
            <option value={key.text} key={key.id}>
              {key.text}
            </option>
          ))}
        </select>
      </form>
      <CreateCategory />
      <CreateToDo />
      <span>{category}</span>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
export default Todolist;
