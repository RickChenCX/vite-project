import { defineStore } from "pinia"

export const useTestStore = defineStore({
  id: "test",
  state: () => ({
    title: "test pinia state",
    counter: 0,
  }),
  getters: {},
  actions: {},
})
