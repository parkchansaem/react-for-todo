import { Category, ITodo, toDostate } from "./Atoms";
import { useSetRecoilState } from "recoil";

function Todo({ text, category, id }: ITodo) {
  const setTodo = useSetRecoilState(toDostate);

  const onclick = (newCategory: ITodo["category"]) => {
    console.log(newCategory);
    setTodo((oldTodo) => {
      const targetIndex = oldTodo.findIndex((Todo) => Todo.id === id);
      const newTodos = { text, id, category: newCategory };
      console.log(newTodos);
      return [
        ...oldTodo.slice(0, targetIndex),
        newTodos,
        ...oldTodo.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Category.To_Do && (
        <button onClick={() => onclick(Category.To_Do)}>To Do</button>
      )}
      {category !== Category.Doing && (
        <button onClick={() => onclick(Category.Doing)}>Doing</button>
      )}
      {category !== Category.Done && (
        <button onClick={() => onclick(Category.Done)}>Done</button>
      )}
    </li>
  );
}
export default Todo;
