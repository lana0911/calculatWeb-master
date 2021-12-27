
<template>
<div id="Home">
    <div class="camerabox">
        <div class="camera-box">
            <!-- <div class="openBtn" style="display: flex; justify-content: center;">
                <div class="camera-button">
                    <button type="button" class="button is-rounded cam-button"
                            style="margin-left: 40%; background-color: white; border: 0px;"
                            @click="toggleCamera"
                    >
                        <span v-if="!isCameraOpen"><img style="height: 25px;" class="button-img"
                                            src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"></span>
                        <span v-else><img style="height: 25px;" class="button-img"
                                        src="https://img.icons8.com/material-outlined/50/000000/cancel.png"></span>
                    </button>
                </div>
            </div> -->
            <div class="canvas">
                <div v-if="isCameraOpen" class="camera-canvas">
                    <video ref="camera" :width="canvasWidth" :height="canvasHeight" autoplay></video>
                    <canvas v-show="false" id="photoTaken" ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
                </div>
                <div class="nocam"  v-else>
                  <img  class="nocamsvg" src="https://techreen.com/wp-content/uploads/2021/07/Windows-10-camera-not-working.jpg.webp" />
                </div>
            </div>
            <vue-picture-swipe :items="items"></vue-picture-swipe>
        </div>
    </div>
    <div class="settings">
        <div class="btns">
          
            <div class="toggle-wrapper">
                <div class="name">
                  <i class="icon-camera"></i>
                </div>
                <div class="toggle checkcross">
                  <input id="checkcross" type="checkbox" v-model="ifclose" v-on:click="toggleCamera"/>
                  <label class="toggle-item" for="checkcross">
                    <div class="check"></div>
                  </label>
                </div>
            </div>

            
            <div class="toggle-wrapper">
                <div class="name">
                  <i class="icon-mic"></i>
                </div>
                <div class="toggle checkcross2">
                  <input id="checkcross2" type="checkbox" v-model="mic"  v-on:click="changeHandler1"/>
                  <label class="toggle-item" for="checkcross2">
                    <div class="check"></div>
                  </label>
                </div>
            </div>

            
            <div class="toggle-wrapper">
                <div class="name">
                  <i class="icon-bullhorn"></i>
                </div>
                <div class="toggle checkcross3">
                  <input id="checkcross3" type="checkbox" v-model="chat"  v-on:click="changeHandler2"/>
                  <label class="toggle-item" for="checkcross3">
                    <div class="check"></div>
                  </label>
                </div>
            </div>
        </div>
    </div>

    <div class="settingsContent">
      <div class="btns">
          <div class="toggle-wrapper">
            鏡頭 : {{ifclose ? 'off' : 'on'}}
            <el-button class="test" size="small" type="warning" @click="open1">畫質測試</el-button>
          </div>
          
          <div class="toggle-wrapper">
            麥克風 : {{mic ? 'off' : 'on'}}
            <el-button class="test" size="small" type="warning" @click="open2">音質測試</el-button>
          </div>
          <div class="toggle-wrapper">
            聊天室提醒 : {{chat ? 'off' : 'on'}}
          </div>
        </div>
    </div>

</div>
</template>
<script>
import { ElNotification } from 'element-plus'
import VuePictureSwipe from 'vue-picture-swipe';
import {onBeforeUnmount} from 'vue'  
export default {
    name: "Camera",
    components: {
        VuePictureSwipe
    },
    data() {
        return {
            isCameraOpen: false,
            canvasHeight: 600 ,
            canvasWidth: 400 ,
            items: [],
            ifclose: true,
            mic: true,
            chat: true
        }
    },
    methods: {
        changeHandler1: function(event) {
        // change of userinput, do something
          console.log("1",event)
        },
        changeHandler2: function(event) {
        // change of userinput, do something
          console.log("2",event)
        },
        toggleCamera() {
            if (this.isCameraOpen) {
                this.isCameraOpen = false;
                this.stopCameraStream();
            } else {
                this.isCameraOpen = true;
                this.startCameraStream();
            }
        },
        startCameraStream() {
            const constraints = (window.constraints = {
                audio: false,
                video: true
            });
            navigator.mediaDevices
                .getUserMedia(constraints)
                .then(stream => {
                    this.$refs.camera.srcObject = stream;
                }).catch(error => {
                alert("Browser doesn't support or there is some errors." + error);
            });
        },

        stopCameraStream() {
            let tracks = this.$refs.camera.srcObject.getTracks();
            tracks.forEach(track => {
                track.stop();
            });
        },

        capture() {
            const FLASH_TIMEOUT = 50;
            let self = this;
            setTimeout(() => {
                const context = self.$refs.canvas.getContext('2d');
                context.drawImage(self.$refs.camera, 0, 0, self.canvasWidth, self.canvasHeight);
                const dataUrl = self.$refs.canvas.toDataURL("image/jpeg")
                    .replace("image/jpeg", "image/octet-stream");
                self.addToPhotoGallery(dataUrl);
                self.uploadPhoto(dataUrl);
                self.isCameraOpen = false;
                self.stopCameraStream();
            }, FLASH_TIMEOUT);
        },

        addToPhotoGallery(dataURI) {
            this.items.push(
                {
                    src: dataURI,
                    thumbnail: dataURI,
                    w: this.canvasWidth,
                    h: this.canvasHeight,
                    alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
                }
            )
        },
        uploadPhoto(dataURL){
            let uniquePictureName = this.generateCapturePhotoName();
            let capturedPhotoFile = this.dataURLtoFile(dataURL, uniquePictureName+'.jpg')
            let formData = new FormData()
            formData.append('file', capturedPhotoFile)
        },

        generateCapturePhotoName(){
            return  Math.random().toString(36).substring(2, 15)
        },

        dataURLtoFile(dataURL, filename) {
            let arr = dataURL.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);

            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type: mime});
        },
    },
  setup() {
    const open1 = () => {
      ElNotification({
        title: '✔ 高質量',
        message: '質量高，預期進行過程順暢',
        type: 'success',
      })
    }

    const open2 = () => {
      ElNotification({
        title: '✘ 中低質量',
        message: '將可能影響會議品質',
        type: 'warning',
      })
    }
    onBeforeUnmount(()=>{
      this.isCameraOpen= false,
      this.canvasHeight= 600 ,
      this.canvasWidth= 400 ,
      this.items= [],
      this.ifclose= true,
      this.mic= true,
      this.chat= true
    })
    return {
      open1,
      open2,
    }
  },
}
</script>
 
<style lang="sass" scoped>

.test
  // min-height: 28px
  // padding: 3px 9px
  // font-size: 12px
  // border-radius: calc(var(--el-border-radius-base) - 1px)
  margin: 0 1.5rem

.camera-box 
    border: 1px dashed #d6d6d6
    border-radius: 4px
    height: 40vh
    width: 75vh
video 
    object-fit: fill
    height: 100%
    width: 100%
.canvas, .camera-canvas
    height: 100%
    width: 100%
.canvas
    height: 100%
.openBtn
    height: 10%



#Home
  height: 100%
  width: 100%
  color: #fff
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .camerabox
    height: 50%
    width: 76%    
    display: flex
    justify-content: center
    align-items: center

  .settings
    height: 25%
    width: 100%
    padding: 2rem 0
    .btns,.b
      display: flex
      justify-content: center
      align-items: center
  .settingsContent
    height: 15%
    width: 100%
    .btns,.b
      display: flex
      justify-content: center
      align-items: center

// body {
//   background: #2e394d;
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: center;
// 	align-items: center;
// }

* 
  box-sizing: border-box
  &:before, &:after 
    content: ''
    position: absolute
.name
  display: list-item
  list-style: circle
  font-size: xx-large
input 
  height: 40px
  left: 0
  opacity: 0
  position: absolute
  top: 0
  width: 40px

.toggle-wrapper 
  flex: 1 1 calc(100% / 3)
  // min-height: 50vh
  display: flex
  align-items: center
  justify-content: center
  overflow: hidden
  position: relative
  @media (max-width: 960px) 
    flex: 1 1 calc(100% / 2)
  @media (max-width: 700px) 
    flex: 1 1 100%
  // &:nth-child(1) 
  //   background: #dec387
  // &:nth-child(2) 
  //   background: #de8797
  // &:nth-child(3) 
  //   background: #87aade

.toggle 
  position: relative
  display: inline-block

label.toggle-item 
  width: 7em
  background: #2e394d
  height: 3em
  display: inline-block
  border-radius: 50px
  margin: 40px
  position: relative
  transition: all .3s ease
  transform-origin: 20% center
  cursor: pointer
  &:before 
    display: block
    transition: all .2s ease
    width: 2.3em
    height: 2.3em
    top: .25em
    left: .25em
    border-radius: 2em
    border: 2px solid #88cf8f
    transition: .3s ease




.checkcross 
  label:before 
    content: none
  .check 
    border-radius: 50%
    width: 2.5em
    height: 2.5em
    position: absolute
    background: #8BC34A
    transition: .4s ease
    top: 4.5px
    left: 4.5px
    &:before, &:after 
      height: 4px
      border-radius: 10px
      background: #fff
      transition: .4s ease
    &:before 
      width: 25px
      transform: rotate(-45deg) translate(-6px, 20px)
    &:after 
      width: 10px
      transform: rotate(45deg) translate(20px, 11px)

#checkcross:checked + label 
    .check 
      left: 57px
      transform: rotate(360deg)
      background: #c34a4a
      &:before 
        width: 27px
        transform: rotate(-45deg) translate(-8px, 18px)
      
      &:after 
        width: 27px
        transform: rotate(45deg) translate(18px, 8px)
 



.nocam, .nocamsvg
  width: 100%
  box-sizing: border-box
  height: 100%
//reapat
  
.checkcross2 
  label:before 
    content: none
  .check 
    border-radius: 50%
    width: 2.5em
    height: 2.5em
    position: absolute
    background: #8BC34A
    transition: .4s ease
    top: 4.5px
    left: 4.5px
    &:before, &:after 
      height: 4px
      border-radius: 10px
      background: #fff
      transition: .4s ease
    &:before 
      width: 25px
      transform: rotate(-45deg) translate(-6px, 20px)
    &:after 
      width: 10px
      transform: rotate(45deg) translate(20px, 11px)

#checkcross2:checked + label 
    .check 
      left: 57px
      transform: rotate(360deg)
      background: #c34a4a
      &:before 
        width: 27px
        transform: rotate(-45deg) translate(-8px, 18px)
      
      &:after 
        width: 27px
        transform: rotate(45deg) translate(18px, 8px)
 
.checkcross3 
  label:before 
    content: none
  .check 
    border-radius: 50%
    width: 2.5em
    height: 2.5em
    position: absolute
    background: #8BC34A
    transition: .4s ease
    top: 4.5px
    left: 4.5px
    &:before, &:after 
      height: 4px
      border-radius: 10px
      background: #fff
      transition: .4s ease
    &:before 
      width: 25px
      transform: rotate(-45deg) translate(-6px, 20px)
    &:after 
      width: 10px
      transform: rotate(45deg) translate(20px, 11px)

#checkcross3:checked + label 
    .check 
      left: 57px
      transform: rotate(360deg)
      background: #c34a4a
      &:before 
        width: 27px
        transform: rotate(-45deg) translate(-8px, 18px)
      
      &:after 
        width: 27px
        transform: rotate(45deg) translate(18px, 8px)
 
</style>