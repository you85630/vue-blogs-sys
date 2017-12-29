<template>
  <div class="editor-markdown">
    <textarea v-model="input" placeholder="这里是markdown，请输入内容"></textarea>
    <div class="text-show" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  props: ['text'],
  data () {
    return {
      input: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      let text = marked(this.input, { sanitize: true })
      return text
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-markdown {
  display: flex;
  width: 80%;
  border: 1px solid #eee;
  textarea,
  .text-show {
    padding: 0.6% 1%;
    width: 50%;
    height: 25vh;
  }
  textarea {
    box-sizing: border-box;
    border: none;
    font-size: 1vw;
  }
  .text-show {
    border-left: 1px solid #eee;
    background-color: #f5f5f5;
    font-size: 1vw;
  }
}
</style>
