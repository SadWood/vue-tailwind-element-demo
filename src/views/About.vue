<template>
  <div class="flex-1">
    <h1 class="text-pink-500">This is an about page</h1>
    <Headline
      :tag="'h1'"
      :class="{ 'text-pink-500': true }"
      :id="headline"
      @click="handleClick"
      >This is an h1 tag,try to click</Headline
    >
  </div>
</template>

<script>
import Headline from '../components/Headline'
export default {
  name: 'about',
  components: { Headline },
  methods: {
    handleClick() {
      alert('clicked')
    }
  }
}
</script>
