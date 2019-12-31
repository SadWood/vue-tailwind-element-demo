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
