<template>
  <div class="img-input">
    <i class="fa fa-image"></i>
    <p>点击上传图片</p>
    <input type="file" id="pic" @change="fileImg()">
    <div class="img-box" v-if="img"><img :src="img" alt="">
      <div class="img-replace">
        <p>点击替换图片</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: ''
    }
  },
  methods: {
    fileImg () {
      let pic = document.getElementById('pic').files[0]
      let imgval = URL.createObjectURL(pic)
      function getBase64Image (imgval) {
        let canvas = document.createElement('canvas')
        canvas.width = imgval.width
        canvas.height = imgval.height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(imgval, 0, 0, imgval.width, imgval.height)
        let ext = imgval.src.substring(imgval.src.lastIndexOf('.') + 1).toLowerCase()
        let dataURL = canvas.toDataURL('image/' + ext)
        return dataURL
      }

      let image = new Image()
      image.src = imgval
      image.onload = function () {
        let base64 = getBase64Image(image)
        console.log(base64)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-input {
  position: relative;
  box-sizing: border-box;
  width: 10vw;
  height: 10vw;
  border: 1px solid #eee;
  background-color: #f5f5f5;
  text-align: center;
  &:hover {
    .img-replace {
      display: block;
    }
  }
  p {
    font-size: 1vw;
  }
  i {
    margin-top: 2vw;
    margin-bottom: 1vw;
    color: #999;
    font-size: 4vw;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 10vw;
    height: 10vw;
    opacity: 0;
    cursor: pointer;
  }
}
.img-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 10vw;
  height: 10vw;
  background-color: #f5f5f5;
  text-align: center;
  img {
    box-sizing: border-box;
    width: auto;
    height: 100%;
    border: 1px solid #eee;
  }
  .img-replace {
    position: absolute;
    bottom: 0;
    left: 0;
    display: none;
    width: 10vw;
    height: 10vw;
    background-color: rgba($color: #000000, $alpha: 0.4);
    color: #fff;
    cursor: pointer;
    p {
      line-height: 10vw;
    }
  }
}
</style>
