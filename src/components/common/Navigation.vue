<template>
  <header class="navigation">
    <h1 class="site-title">
      <router-link to="/">roytheaussie</router-link>
    </h1>
    <ul class="nav-menu">
      <router-link to="/about" class="nav-menu-item">About</router-link>
      <router-link to="/food" class="nav-menu-item">Food</router-link>
      <router-link to="/travel" class="nav-menu-item">Travel</router-link>
      <router-link to="/edit" class="nav-menu-item">Edit</router-link>
    </ul>
  </header>
</template>

<script type = "text/javascript" >
export default {

}
</script>

<style lang="scss" scoped>
  @import '../../style/navigation.scss';
</style>
