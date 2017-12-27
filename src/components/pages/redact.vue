<template>
  <div class="redact">
    <div class="btn">
      <button @click="back">返回</button>
    </div>
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
        <img-input></img-input>
      </label>
      <label>
        <p>简介：</p>
        <textarea name=" " id=" "></textarea>
      </label>
      <label>
        <p>内容：</p>
        <editor-markdown></editor-markdown>
      </label>
      <label>
        <p></p>
        <button>提交</button>
      </label>
    </form>
  </div>
</template>

<script>
import imgInput from 'components/common/imgInput'
import editorMarkdown from 'components/common/editorMarkdown'
export default {
  components: {
    imgInput,
    editorMarkdown
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.redact {
  padding: 2vw;
  .btn {
    text-align: right;
    margin-bottom: 1vw;
    button {
      border-radius: 2px;
      line-height: 1;
      border: none;
      background-color: #2d8cf0;
      color: #fff;
      font-size: 1.2vw;
      padding: 0.5vw 1.2vw;
    }
  }
}
form {
  label {
    display: block;
    margin-bottom: 1.2vw;
    display: flex;
    align-items: center;
    p {
      font-size: 1.2vw;
      width: 20%;
    }
    input,
    textarea {
      border: 1px solid #eee;
      width: 80%;
      box-sizing: border-box;
      padding: 0.6% 1%;
      font-size: 1vw;
      border-radius: 2px;
    }
    textarea {
      height: 6vw;
    }
    button {
      line-height: 1;
      border-radius: 2px;
      border: none;
      background-color: #2d8cf0;
      color: #fff;
      font-size: 1.2vw;
      padding: 1vw 3vw;
    }
  }
}
</style>
