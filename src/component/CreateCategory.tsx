import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Category, categoryState, customCategoryState } from "./Atoms";
interface Icategory {
  customcategory: string;
}
function CreateCategory() {
  const setcategory = useSetRecoilState(customCategoryState);
  const { register, setValue, handleSubmit } = useForm<Icategory>();
  const onValue = ({ customcategory }: Icategory) => {
    setcategory((categoryprops) => {
      const result = [
        { text: customcategory, id: Date.now() },
        ...categoryprops,
      ];
      localStorage.setItem("toDos", JSON.stringify(result));
      return result;
    });
    setValue("customcategory", "");
  };

  return (
    <form onSubmit={handleSubmit(onValue)}>
      <input {...register("customcategory")} placeholder="write category" />
      <button>add</button>
    </form>
  );
}

export default CreateCategory;
