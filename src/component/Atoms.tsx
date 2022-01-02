import { atom, selector } from "recoil";

export enum Category {
  "To_Do" = "To_Do",
  "Doing" = "Doing",
  "Done" = "Done",
}

export interface ITodo {
  text: string;
  id: number;
  category: Category;
}

export const categoryState = atom<Category>({
  key: "category",
  default: Category.To_Do,
});
export const toDostate = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const todos = get(toDostate);
    const cateory = get(categoryState);
    return todos.filter((todo) => todo.category === cateory);
  },
});
