<template lang="pug">
#roomCard
  el-row
    el-card(v-for="item in cardData" shadow="hover" )  
      el-badge(value="ON" class="item" v-if="item.on=='yes'")
        img(
          :src="item.img"
          class="image"
        )
      img(
        :src="item.img"
        class="image"
        v-else
      )
      div(style="padding: 5px")
        .tittle
          div.head1 {{item.name}}
          div.head2 {{item.classfy}}
        .bottom
          el-button(type="primary" size="mini" v-if="item.on=='yes'" @click="click(item)") 進入
          el-tag.time( v-if="item.on=='no'" type="primary") 預計開始:  {{item.time}}



    el-dialog.meeting(
      v-model="dialogVisible"
      title="上傳檔案"
      width="85%" center
      :before-close="handleClose"
      destroy-on-close
    )
      template(#title)
        span 即將進入 :&emsp; {{meeting.name}} - {{meeting.person}}
      Home()
      template(#footer)
        el-button(round plain class="enter")  進入
          
</template>
<script>
import Home from '@/views/Home.vue'
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'roomCard',
  components:{
    Home
  },
  props: {
    cardData: {
      type: Array,
    }
  },
 methods:{
   goToHome(){
     this.$router.push('/home'); 
    }
  },
  setup() {
    const dialogVisible = ref(false)
    const meeting = ref({
      name: '',
      person: ''
    })
    const dis = (i)=>{
      if(i=='yes')
        return false
      return true
    }

    const click = (item) =>{
      dialogVisible.value = true
      meeting.value.name = item.name
      meeting.value.person = item.classfy
    }

    return {
      meeting,
      dis,
      dialogVisible,
      click
    }
  }
})
</script>

<style lang="sass" scoped>
@import '@/assets/stylesheets/shared/_theme.sass'
:deep(.el-overlay-dialog)
  display: flex
  overflow: auto
  justify-content: center
  align-items: center
.enter
  border-radius: var(--el-border-radius-round)
  padding: 12px 23px
  background-color: #2e394d
  color: #fff
  border: 0 
//   box-shadow: 2px -1px 1px 1px #1c1c1c, -1px 0px 0px 1px #949191
// .enter:hover
//   box-shadow: 0px 0px 1px 1px #1c1c1c, 0px 0px 0px 1px #949191
// .enter:active, .enter:focus
//   box-shadow: inset 1px -1px 1px 1px #1c1c1c, inset 0px 1px 1px 1px #949191
:deep(.el-card)
  width: 15rem
  height: 16rem
  margin: .2rem .5rem
.item 
  margin-right: 1px

.image
  width: 100%
  height: 8rem
.tittle
  display: flex
  margin: .3rem 0
  margin-bottom: 1rem 
  .head1
    width: 65%
    font-size: 2.5vmin
    font-weight: bold
  .head2
    width: 35%
    display: flex
    justify-content: flex-end
    align-items: center
    font-size: 2vmin
.bottom
  display: flex
  justify-content: flex-end
  .time
    display: flex
    justify-content: flex-end
    font-size: 1.5vmin
    width: 60%
    
.meeting
  height: 100%
  margin: 0
:deep(.el-dialog)
  height: 90%
  margin: 0
  background-color: #1F222B
  box-shadow: 0 0 7px 4px #404040
  .el-dialog__header
    height: 1%
    color: aliceblue
    display: flex
    justify-content: center
    align-items: center
    background-color: #3d4252
    padding: 25px
  .el-dialog__body
    height: 75%
  .el-dialog__footer
    height: 10%
    width: 90%
    display: flex
    justify-content: center
    align-items: center


</style>


