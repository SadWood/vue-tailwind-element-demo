<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" active-class="router-actived" exact>Home</router-link>
      |
      <router-link to="/about" active-class="router-actived">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="postcss">
#app {
  @apply text-gray-700 font-sans antialiased text-center pt-16 min-h-screen flex flex-col flex-no-wrap;
}
</style>
