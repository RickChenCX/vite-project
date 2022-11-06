import { defineStore } from "pinia";

interface TodosItem {
  text: string;
  id: number;
  isFinished: boolean;
}
export const useTodosStore = defineStore({
  id: "todos",
  state: () => ({
    todos: [] as TodosItem[],
    filter: "all",
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
  },
  actions: {
    addTodo(text: string) {
      this.nextId++;
      const idx = this.nextId;
      this.todos.push({ text, id: idx, isFinished: false });
      return this.nextId;
    }
  },
  debounce: {},
  // 持久化数据
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["filter", "nextIs"],
      },
    ],
  },
});
