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

    .drive
      i.icon-google-drive(style="color: orange;font-size: 5vmin")
      i.icon-onedrive(style="color: blue;font-size: 5vmin")
      i.icon-dropbox(style="color: #42dbb8;font-size: 5vmin")
      i.icon-libreoffice(style="color: #000;font-size: 5vmin")

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
    .drive
        font-size: 5vmin
        display: flex
        justify-content: space-evenly
        margin: 1rem 0
    .drive:hover
      cursor: pointer

</style>

