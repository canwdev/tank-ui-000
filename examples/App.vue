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

export default {
  data() {
    return {
      isSwitch: false
    };
  }
};
</script>

<style>
</style>
