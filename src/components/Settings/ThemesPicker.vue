<template lang="pug">
#themespicker
  .block(@click="changeTheme('default')")
    .img#de
    .p() 預設
  .block(@click="changeTheme('cute')")
    .img#cute
    .p Cute
  .block(@click="changeTheme('tech')") 
    .img#tech
    .p 科技風
</template>

<script>
import {themeHead, themeNavItem, themeNav, wrapClass, titleClass, htmlClass} from '@/var'
export default {
  name: 'ThemesPicker',
  setup() {
    const changeTheme = (i)=>{
      htmlClass.value = i + 'html'
      titleClass.value = i + 'title'
      wrapClass.value = i + 'wrap'
      themeHead.value = i + 'themeHead'
      themeNavItem.value = i + 'themeNavItem'
      themeNav.value = i + 'themeNav'
      console.log("改變後=",themeHead, themeNavItem, themeNav, wrapClass)
    }

    return {
      changeTheme
    }
  }
}
</script>

<style lang="sass" scoped>
#themespicker
  display: flex
  .block
    width: 20rem
    height: 15rem
    border: 1px solid
    border-radius: 0  0 10px 10px
    margin: .5rem
    .img
      width: 100%
      height: 85%
    .p
      width: 100%
      height: 15%
      display: flex
      align-items: center
      justify-content: center
    #de 
      background: #dec387 
      background: url('../../assets/imgs/default.png')
      background-size: cover
    #cute
      background: #de8797
      background: url('../../assets/imgs/cute.png')
      background-size: cover
    #tech
      background: #87aade
      background: url('../../assets/imgs/tech.png')
      background-size: cover
  .block:hover
    cursor: pointer
</style>


