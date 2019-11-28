<template>
  <div>
    <h1>Just a demo UI</h1>
    
    <MySwitch v-model="isSwitch">开关:</MySwitch>

    <p>
      <a v-if="isSwitch" href="https://juejin.im/post/5b45df255188251b1d474860">https://juejin.im/post/5b45df255188251b1d474860</a>
    </p>
  </div>
</template>

<script>
import MySwitch from "./components/switch/Switch";
export default {
  data() {
    return {
      isSwitch: false
    };
  },
  components: {
    MySwitch
  }
};
</script>

<style>
</style>