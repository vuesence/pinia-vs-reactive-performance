import { createApp, reactive, ref } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App);
app.config.globalProperties.$globalRef = ref(0);
app.config.globalProperties.$globalReactive = reactive({ key: 0 });
app.use(pinia).mount("#app");
