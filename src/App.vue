<template>
  <div>
    <HelloWorld msg="Just a demo UI library" />

    <Switcher v-model="isSwitch">开关:</Switcher>

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
import Switcher from "./components/Switcher";

export default {
  components: {
    HelloWorld,
    Switcher
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