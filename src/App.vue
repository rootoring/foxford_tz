<template>
<HeaderApp />
  <router-view/>
</template>

<script>
import HeaderApp from './components/Header.vue'

export default{
    components: {
    HeaderApp
  }
}
</script>

<style lang="scss">
#app {
display: flex;
flex-direction: column;
}
</style>
