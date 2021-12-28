
<template >
<div class="wrap">
  <div class="navBar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="/activity"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-menu-item  index="/activity">
        <template #title>
          <div class="title">
            <i class="icon-books"></i>
            <div class="t-word">活動</div>
          </div>
        </template>
      </el-menu-item >
      <el-menu-item index="/document">
        <div class="title">
          <i class="icon-file-word"></i>
          <div class="t-word">檔案管理</div>
        </div>
      </el-menu-item>
      <el-menu-item index="/lovedoc">
        <div class="title">
          <i class="icon-heart"></i>
          <div class="t-word">我的最愛</div>
        </div>
      </el-menu-item>
      <el-menu-item index="3" >
        <div class="title">
          <i class="icon-man-woman"></i>
          <div class="t-word">團隊</div>
            
        </div>  
      </el-menu-item>
      <el-menu-item index="4">
        <div class="title">
          <i class="icon-calculator"></i>
          <div class="t-word">作業</div>
        </div>
      </el-menu-item>
      <el-menu-item index="4">
        <div class="title">
          <i class="icon-phone"></i>
          <div class="t-word">通話</div>
        </div>
      </el-menu-item>

    </el-menu>
  </div>
  <div class="right">
    <div class="header">
      <div class="front" id="block">
        <span>Deams</span>
      </div>
      <div class="middle" id="block">
        <span>2</span>
      </div>
      <div class="tail" id="block">
         <el-avatar class="ava" :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <i id="btn" class="icon-equalizer" ></i>
      </div>
    </div>
    <div class="content">
      <router-view/>

    </div>
  </div>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'navBar',
  components: {

  },
  setup() {
    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
    }
  },
})
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Road+Rage&display=swap')
@import '@/assets/stylesheets/shared/_theme.sass'
.navBar,.wrap
  height: 100%
.navBar
  width: 180px
    
  .title
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    i
      font-size: x-large
    .t-word
      font-size: larger
      padding: 0
      line-height: initial
.navBarBlock
  height: 100%

.el-menu-vertical-demo:not(.el-menu--collapse) 
  width: 100%
  min-height: 400px



:deep(.el-menu-item)
  display: flex
  justify-content: center 
  padding: 3rem 0

.el-menu-vertical-demo
  height: 100%




/* header */ 

.wrap
  display: flex
  width: 100%

.right
  height: 100%
  width: 100%

.content
  width: 100%
  height: 90%

.header
  width: 100.1%
  height: 10%
  background-color: #545c64
  display: flex
  position: relative
  left: -1px
  #block
    width: 33.3%
  .front
    padding: 0 2rem
    span
      font-size: 8vmin
      color: $stressColor
      font-family: 'Road Rage', cursive
  .tail
    display: flex
    justify-content: flex-end
    .ava
      align-self: center
    #btn
      align-self: center
      font-size: 4vmin
      color: $stressColor
      margin: 0 1rem
    #btn:hover
      font-size: 4.2vmin
      color: $stressColorLight
      cursor: pointer


</style>