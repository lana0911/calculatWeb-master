<template lang="pug">
#uploader
    el-upload(
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :on-change="handleChange"
        :file-list="fileList"
    )
        .ico
            i.icon-upload2
                upload-filled
        .el-upload__text
            Drop file here or 
                em click to upload
        template (#tip)
        .el-upload__tip
            jpg/png files with a size less than 500kb

</template>

<script>
export default {
    name: 'uploader',
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
          this.$message.error('上傳圖之像素建議大於600*400!');
    },


  },
    setup() {
        
    }
}
</script>

<style lang="sass" scoped>
#uploader
    i
        font-size: 10vmin
    .ico
        margin: 1rem 0
</style>

