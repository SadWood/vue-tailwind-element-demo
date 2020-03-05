<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <button class="btn mt-1">
      tailwind-button
    </button>
    <br />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    // this.$http.get('/api/arknights/index').then(response => {
    //   console.log(response.data)
    // })
  }
}
</script>

<style scoped lang="postcss">
.btn {
  @apply font-medium rounded bg-white text-gray-700 border border-solid border-gray-300;

  /* 可以使用类似Sass的嵌套语法 */
  &:hover,
  &:focus {
    @apply bg-blue-100 border-blue-200 text-blue-400;
  }
}

@screen md {
  .btn {
    @apply px-5 py-2 text-sm;
  }
}

@screen xl {
  .btn {
    @apply px-5 py-2 text-sm;
  }
}

button:focus {
  @apply outline-none !important;
}
</style>
