# tank-ui

> Just a demo Vue UI library

## How to use

### First install the package

```
npm i tank-ui

# or use yarn
# yarn add tank-ui
```

### Use globally

In your vue project `src/main.js`

```js
import Vue from 'vue'

import TankUI from 'tank-ui'
Vue.use(TankUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
```

then you can use component in project globally

```vue
<template>
  <div>
    <HelloWorld/>
  </div>
</template>
```

### Or use as single component

```vue
<template>
  <div>
    <HelloWorld/>
  </div>
</template>

<script>
  import {HelloWorld} from 'tank-ui'

  export default {
    components: {
      HelloWorld
    }
  }
</script>
```

## Reference

- https://juejin.im/post/5b45df255188251b1d474860
- https://github.com/frankxjkuang/custom-ui
- https://xuebin.me/posts/43109cf3.html
