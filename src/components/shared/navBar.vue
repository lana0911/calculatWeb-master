
<template >
<div class="wrap">
  <div class="navBar">
    <el-menu
      :class="themeNav"
      default-active="/"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-menu-item :class="themeNavItem" index="/">
        <template #title>
          <div :class="titleClass">
            <i class="icon-books"></i>
            <div class="t-word">活動</div>
          </div>
        </template>
      </el-menu-item >
      <el-menu-item :class="themeNavItem" index="/document">
        <div :class="titleClass">
          <i class="icon-file-word"></i>
          <div class="t-word">檔案管理</div>
        </div>
      </el-menu-item>
      <el-menu-item :class="themeNavItem" index="/lovedoc">
        <div :class="titleClass">
          <i class="icon-heart"></i>
          <div class="t-word">我的最愛</div>
        </div>
      </el-menu-item>
      <el-menu-item :class="themeNavItem" index="/3" >
        <div :class="titleClass">
          <i class="icon-man-woman"></i>
          <div class="t-word">團隊</div>
            
        </div>  
      </el-menu-item>
      <el-menu-item :class="themeNavItem" index="4">
        <div :class="titleClass">
          <i class="icon-calculator"></i>
          <div class="t-word">作業</div>
        </div>
      </el-menu-item>
      <el-menu-item :class="themeNavItem" index="5">
        <div :class="titleClass">
          <i class="icon-phone"></i>
          <div class="t-word">通話</div>
        </div>
      </el-menu-item>

    </el-menu>
  </div>
  <div class="right">
    <div :class="wrapClass">
      <div class="front" id="block">
        <span>Deams{{defaultwrap}}</span>
      </div>
      <div class="middle" id="block">
      </div>
      <div class="tail" id="block">
        <el-avatar class="ava" :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-dropdown class="ava">
            <i id="btn" class="icon-equalizer" ></i>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>個人</el-dropdown-item>
                <el-dropdown-item>其他</el-dropdown-item>
                <el-dropdown-item>說明</el-dropdown-item>
                <el-dropdown-item>聯絡我們</el-dropdown-item>
                <el-dropdown-item @click="the" >
                  <router-link to="/themespicker">設定</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
        </el-dropdown>
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

import {themeHead, themeNavItem, themeNav, wrapClass, titleClass} from '@/var'

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

    const the = () =>{

    }

    return {
      isCollapse,
      handleOpen,
      handleClose,
      themeNav,
      themeNavItem,
      themeHead,
      wrapClass,
      titleClass,
      the

    }
  },
})
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Road+Rage&display=swap')
// @import '@/assets/stylesheets/shared/_theme.sass'
@import '@/assets/stylesheets/themes/_default.sass'
@import '@/assets/stylesheets/themes/_tech.sass'
@import '@/assets/stylesheets/themes/_light.sass'
@import '@/assets/stylesheets/themes/_cute.sass'


</style>