<template>
  <h2>{{ filter }}</h2>
  <button @click="addTodo" class="border py-aa px-aa">addTodo</button>
  <h3>{{ todos }}</h3>
  <button @click="nextId++">nextId++</button>
  <h3>{{ nextId }}</h3>
  <button @click="store.addNum">num++</button>
  <h3>{{ store.num }}</h3>
  <button @click="reset">重置</button>
  <svg-icon iconName="icon-hanbaopisa" />
  <svg-icon iconName="icon-tianqi_baoyu" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useTodosStore } from "@/store/todos";
export default defineComponent({
  name: "todo",
  setup() {
    const store = useTodosStore(); // 使用store
    const { filter, todos, nextId } = storeToRefs(store);
    console.log(store, "store");
    const addTodo = () => {
      store.addTodo("测试");
    };
    const reset = () => {
      // 重置state数据
      store.$reset();
    };
    return {
      store,
      filter,
      todos,
      nextId,
      addTodo,
      reset,
    };
  },
});
</script>