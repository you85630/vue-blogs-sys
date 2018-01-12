<template>
  <div class="img-input">
    <i class="fa fa-image"></i>
    <p>点击上传图片</p>
    <input type="file" id="input" @change="fileImg">
    <div class="img-box" v-if="imgData">
      <img :src="imgData" alt="">
      <div class="img-replace">
        <p>点击替换图片</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgVal'],
  data () {
    return {
      imgData: ''
    }
  },
  methods: {
    fileImg () {
      let oFile = document.querySelector('#input')
      function run (input, pic) {
        let file = input.files[0]
        let reader = new FileReader()
        if (typeof (FileReader) !== 'undefined') {
          reader.onload = function () {
            pic(this.result)
          }
          reader.readAsDataURL(file)
        }
      }
      run(oFile, (data) => {
        // 插入预览图片
        this.imgData = data
        this.$emit('imgInput', data)
      })
    },
    isImg () {
      if (this.imgVal) {
        this.imgData = this.imgVal
      } else {
        this.imgData = ''
      }
    }
  },
  created () {
    this.isImg()
  },
  watch: {
    '$route': 'isImg'
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
    z-index: 2;
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
  z-index: 1;
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
