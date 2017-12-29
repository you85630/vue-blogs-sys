<template>
  <div class="redact">
    <div class="btn">
      <button @click="back">返回</button>
    </div>
    <ul>
      <li>
        <p>标题：</p>
        <input type="text" name="" id="">
      </li>
      <li>
        <p>标签：</p>
        <input type="text" name="" id="">
      </li>
      <li>
        <p>发布时间：</p>
        <input type="text" name="" id="">
      </li>
      <li>
        <p>封面：</p>
        <img-input></img-input>
      </li>
      <li>
        <p>简介：</p>
        <textarea></textarea>
      </li>
      <li>
        <p>内容：</p>
        <editor-markdown :text="markdown"></editor-markdown>
      </li>
      <li>
        <p></p>
        <button class="look">预览</button>
        <button>提交</button>
      </li>
    </ul>
  </div>
</template>

<script>
import imgInput from 'components/common/imgInput'
import editorMarkdown from 'components/common/editorMarkdown'
export default {
  data () {
    return {
      markdown: ''
    }
  },
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
    margin-bottom: 1vw;
    text-align: right;
    button {
      padding: 0.5vw 1.2vw;
      border: none;
      border-radius: 2px;
      background-color: #2d8cf0;
      color: #fff;
      font-size: 1.2vw;
      line-height: 1;
    }
  }
}
ul {
  li {
    display: flex;
    align-items: center;
    margin-bottom: 1.2vw;
    p {
      width: 20%;
      font-size: 1.2vw;
    }
    input,
    textarea {
      box-sizing: border-box;
      padding: 0.6% 1%;
      width: 80%;
      border: 1px solid #eee;
      border-radius: 2px;
      font-size: 1vw;
    }
    textarea {
      height: 6vw;
    }
    button {
      padding: 1vw 3vw;
      border: none;
      border-radius: 2px;
      background-color: #2d8cf0;
      color: #fff;
      font-size: 1.2vw;
      line-height: 1;
    }
    .look {
      margin-right: 2vw;
      background-color: #fc0;
    }
  }
}
</style>
