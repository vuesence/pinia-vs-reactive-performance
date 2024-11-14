<script setup>
import { storeToRefs } from "pinia";
import { getCurrentInstance, reactive, ref } from "vue";
import { useTestStore } from "./useTestStore";
import { useTestStoreOptions } from "./useTestStoreOptions.js";

const testStore = useTestStore();
const testStoreOption = useTestStoreOptions();
const { count: storeRefOption, countReactive: storeReactiveOption } = storeToRefs(testStoreOption);
const { count: storeRef, countReactive: storeReactive } = storeToRefs(testStore);
const { appContext } = getCurrentInstance();
const globalRef = appContext.config.globalProperties.$globalRef;
const globalReactive = appContext.config.globalProperties.$globalReactive;

const refVar = ref(0);
const reactiveVar = reactive({ key: 0 });
const time = reactive({
  ref: 0,
  reactive: 0,
  globalRef: 0,
  globalReactive: 0,
  piniaRef: 0,
  piniaRefStoreToRef: 0,
  piniaRefOption: 0,
  piniaRefOptionStoreToRef: 0,
  piniaReactive: 0,
  piniaReactiveStoreToRef: 0,
  piniaReactiveOption: 0,
  piniaReactiveOptionStoreToRef: 0,
});

let startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  refVar.value = i;
}
time.ref = `Ref time: ${Date.now() - startTime}ms`;
console.log(time.ref);
console.log(refVar.value);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  globalRef.value = i;
}
time.globalRef = `Global ref time: ${Date.now() - startTime}ms`;
console.log(time.globalRef);
console.log(globalRef.value);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  storeRef.value = i;
}
time.piniaRefStoreToRef = `Pinia composible store to ref time: ${Date.now() - startTime}ms`;
console.log(time.piniaRefStoreToRef);
console.log(storeRef.value);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  testStore.count = i;
}
time.piniaRef = `Pinia composible ref time: ${Date.now() - startTime}ms`;
console.log(time.piniaRef);
console.log(testStore.count);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  storeRefOption.value = i;
}
time.piniaRefOptionStoreToRef = `Pinia option store to ref time: ${Date.now() - startTime}ms`;
console.log(time.piniaRefOptionStoreToRef);
console.log(storeRefOption.value);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  testStoreOption.count = i;
}
time.piniaRefOption = `Pinia option ref time: ${Date.now() - startTime}ms`;
console.log(time.piniaRefOption);
console.log(testStoreOption.count);

// ------

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  reactiveVar.key = i;
}
time.reactive = `Reactive time: ${Date.now() - startTime}ms`;
console.log(time.reactive);
console.log(reactiveVar.key);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  globalReactive.key = i;
}

time.globalReactive = `Global reactive time: ${Date.now() - startTime}ms`;
console.log(time.globalReactive);
console.log(globalReactive.value);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  storeReactive.value.key = i;
}

time.piniaReactiveStoreToRef = `Pinia composible reactive store to refs time: ${Date.now() - startTime}ms`;
console.log(time.piniaReactiveStoreToRef);
console.log(storeReactive.value.key);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  testStore.countReactive.key = i;
}

time.piniaReactive = `Pinia composible reactive time: ${Date.now() - startTime}ms`;
console.log(time.piniaReactive);
console.log(testStore.countReactive.key);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  storeReactiveOption.value.key = i;
}

time.piniaReactiveOptionStoreToRef = `Pinia option reactive store to refs time: ${Date.now() - startTime}ms`;
console.log(time.piniaReactiveOptionStoreToRef);
console.log(storeReactiveOption.value.key);

startTime = Date.now();
for (let i = 0; i <= 1000000; i++) {
  testStoreOption.countReactive.key = i;
}

time.piniaReactiveOption = `Pinia option reactive time: ${Date.now() - startTime}ms`;
console.log(time.piniaReactiveOption);
console.log(testStoreOption.countReactive.key);
</script>

<template>
  <div>
    1000000 "reactive" write operations
  </div>
  <div>
    {{ time.ref }}
  </div>
  <div>
    {{ time.globalRef }}
  </div>
  <div>
    {{ time.piniaRefStoreToRef }}
  </div>
  <div>
    {{ time.piniaRef }}
  </div>
  <div>
    {{ time.piniaRefOptionStoreToRef }}
  </div>
  <div>
    {{ time.piniaRefOption }}
  </div>
  <div>
    {{ time.reactive }}
  </div>
  <div>
    {{ time.globalReactive }}
  </div>
  <div>
    {{ time.piniaReactiveStoreToRef }}
  </div>
  <div>
    {{ time.piniaReactive }}
  </div>
  <div>
    {{ time.piniaReactiveOptionStoreToRef }}
  </div>
  <div>
    {{ time.piniaReactiveOption }}
  </div>
</template>
