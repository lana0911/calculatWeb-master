
<template lang="pug">
#Home
  Camera()
  // .camerabox
  //   Camera()
  // .settings
  //   .btns
  //     .b
  //       .cam#btn
  //         i.icon-camera
  //       .name 鏡頭
  //     .b
  //       .mic#btn
  //         i.icon-mic
  //       .name 麥克風  

</template>
 
<script>
import Camera from '@/components/mettings/Camera.vue'
export default {
    name: "Home",
    components: {
        Camera
    },
}
</script>
<style lang="sass" scoped>
#Home
  height: 100%
  width: 100%
//   color: #fff
//   display: flex
//   flex-direction: column
//   justify-content: center
//   align-items: center
//   .camerabox
//     height: 50%
//     width: 76%    
//     display: flex
//     justify-content: center
//     align-items: center

//   .settings
//     height: 50%
//     padding: 2rem 0
//     .btns,.b
//       display: flex
//       justify-content: center
//       align-items: center
//     #btn
//       // border: 2px solid
//       // padding: 15px
//       // border-radius: 5px
//       display: flex
//       justify-content: center
//       align-items: center
//       font-size: 1.5em
//       background-color: #18191f
//       color: #fff
//       box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080, 2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080
//       border-radius: 29px
//       padding: 11px 19px
//       margin: 0 1rem
//       animation: animate 3s linear infinite
//       text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff
//     @keyframes animate 
//       from 
//         filter: hue-rotate(0deg)
//       to 
//         filter: hue-rotate(360deg)
  

</style>



