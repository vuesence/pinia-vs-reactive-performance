import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useTestStore = defineStore("testStore", () => {
  const count = ref(0);
  const countReactive = reactive({ key: 0 });
  return { count, countReactive };
});
