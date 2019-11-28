<template>
  <div>
    <HelloWorld msg="Just a demo UI library" />

    <MySwitch v-model="isSwitch">开关:</MySwitch>

    <p>
      <a
        v-if="isSwitch"
        href="https://github.com/frankxjkuang/custom-ui"
      >https://github.com/frankxjkuang/custom-ui</a>
    </p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import MySwitch from "./components/Switch";

export default {
  components: {
    HelloWorld,
    MySwitch
  },
  data() {
    return {
      isSwitch: false
    };
  }
};
</script>

<style>
</style>