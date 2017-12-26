<template>
  <div class="redact">
    <form action="">
      <label>
        <p>标题：</p>
        <input type="text" name="" id="">
      </label>
      <label>
        <p>标签：</p>
        <input type="text" name="" id="">
      </label>
      <label>
        <p>发布时间：</p>
        <input type="text" name="" id="">
      </label>
      <label>
        <p>封面：</p>
        <VueImgInputer v-model="picValue" icon="img" size="small"></VueImgInputer>
      </label>
      <label>
        <p>简介：</p>
        <textarea name=" " id=" "></textarea>
      </label>
      <label>
        <p>内容：</p>
        <mavon-editor v-model="textValue" placeholder="输入……"></mavon-editor>
      </label>
      <label>
        <p></p>
        <button>提交</button>
      </label>
    </form>
  </div>
</template>

<script>
import VueImgInputer from 'vue-img-inputer'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: {
    VueImgInputer,
    mavonEditor
  },
  data () {
    return {
      picValue: '',
      textValue: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.redact {
  padding: 2vw;
}
form {
  label {
    display: block;
    margin-bottom: 1vw;
    display: flex;
    align-items: center;
    p {
      font-size: 16px;
      width: 20%;
    }
    input,
    textarea {
      border: 1px solid #eee;
      width: 80%;
      box-sizing: border-box;
      padding: 1%;
      font-size: 14px;
    }
    textarea {
      height: 6vw;
    }
    input[type='file'] {
      border: none;
    }
    button {
      line-height: 1;
      border: none;
      background-color: #2d8cf0;
      color: #fff;
      font-size: 16px;
      padding: 1vw 2vw;
    }
    .v-note-wrapper {
      height: 30vh;
      width: 80%;
      font-size: 14px;
      box-sizing: border-box;
      position: relative;
    }
  }
}
</style>
