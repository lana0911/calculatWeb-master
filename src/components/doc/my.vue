<template lang="pug">
#my
  tableDoc()
//   .show
    // el-upload(
    //     class="upload-demo"
    //     drag
    //     action="https://jsonplaceholder.typicode.com/posts/"
    //     multiple
    //     :on-change="handleChange"
    //     :file-list="fileList"
    // )
    //     el-icon(class="el-icon--upload")
    //         upload-filled
    //     .el-upload__text
    //     Drop file here or 
    //     em click to upload
    //     template (#tip)
    //     .el-upload__tip
    //         jpg/png files with a size less than 500kb
</template>

<script>
import { defineComponent } from 'vue';
import tableDoc from '@/components/doc/tableDoc.vue'
export default defineComponent({
  name: 'my',
  components:{
    tableDoc
  },
  data() {
    return {
      fileList: [
 
      ],
    }
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3)
      console.log(file)
      if(file.size >7000)
          this.$message.error('上傳圖便像素要大于600*400!');
    },


  },
  setup() {
  }
})
</script>



<style lang="sass" scoped>
#my
    display: flex
    height: 100%
    .tables
        width: 100%
    
    .show
        width: 70%
    // .tables
    //     width: 30%
</style>
