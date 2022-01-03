<template>
  <div :class="htmlClass" id="nav">
    <nav-bar/>

    <!-- <router-link to="/">Home</router-link> | -->
  </div>
</template>
<script>
import navBar from '@/components/shared/navBar'
import {htmlClass} from '@/var'
export default {
  name: 'App',
  components: {
    navBar,
  },
  setup() {
    

    return {
      htmlClass
    }
  }
}
</script>


<style lang="sass" >
@import '@/assets/stylesheets/themes/_default.sass'
@import '@/assets/stylesheets/themes/_tech.sass'
@import '@/assets/stylesheets/themes/_light.sass'
@import '@/assets/stylesheets/themes/_cute.sass'


html, body
  height: 100%
  margin: 0
  padding: 0
  background-color: #f7f7f7
  overflow: hidden

#app,#nav
  height: 100%
.defaulthtml
  width: 100%
  background-color: #f7f7f7
.cutethtml
  background-color: #000
  width: 100%
.techhtml
  width: 100%
  background-color: #eff5fc

</style>


