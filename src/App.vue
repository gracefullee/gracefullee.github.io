import Navigation from './TodoList'

<template>
  <div id="app">
    <navigation />
    <div class="page-content">
      <router-view />
    </div>
    <page-footer />
  </div>
</template>

<script>
import Navigation from './components/common/Navigation'
import PageFooter from './components/common/PageFooter'

export default {
  name: 'App',
  components: {
    Navigation,
    PageFooter
  }
}
</script>

<style lang="scss" scoped>
  @import './style/main.scss';
</style>
