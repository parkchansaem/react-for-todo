import { useSetRecoilState, useRecoilValue } from "recoil";
import { useForm } from "react-hook-form";
import { categoryState, toDostate } from "./Atoms";

interface Iform {
  todo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDostate);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<Iform>();
  const onvalue = ({ todo }: Iform) => {
    setToDos((oldToDos) => {
      const result = [{ text: todo, id: Date.now(), category }, ...oldToDos];
      localStorage.setItem("toDos", JSON.stringify(result));
      return result;
    });
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(onvalue)}>
      <input
        {...register("todo", { required: "plase write" })}
        placeholder="input text"
      />
      <button>add</button>
    </form>
  );
}

export default CreateToDo;
