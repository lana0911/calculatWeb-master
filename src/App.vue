<template>
  <div id="nav">
    <nav-bar/>

    <!-- <router-link to="/">Home</router-link> | -->
  </div>
</template>
<script>
import navBar from '@/components/shared/navBar'
export default {
  name: 'App',
  components: {
    navBar,
  }
}
</script>


<style lang="scss" >
html, body{
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  overflow: hidden;

}
#app,#nav{
  height: 100%;
}
// #nav{
//   background-color: #000
// }
</style>


