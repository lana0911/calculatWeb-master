<template lang="pug">
#Document
  el-tabs(
    v-model="activeName"
    type="card"
  )
    el-tab-pane(label="我的檔案" name="first") 
      my()
    el-tab-pane(label="共享資源" name="sec") 
      share()
</template>

<script>
import my from '@/components/doc/my.vue'
import share from '@/components/doc/share.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Document',
  components:{
    share,my
  },
  setup() {
    const activeName =  'first'
    return {
      activeName
    }
  }
})
</script>

<style lang="sass" scoped>
#Document
  height: 100%
:deep(.el-tabs)
  height: 100%
  .el-tabs__content, .el-tab-pane
    height: 100%
</style>

