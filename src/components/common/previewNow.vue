<template>
  <div class="preview-now" v-if="show">
    <div class="intro">
      <div class="title">{{preview.title}}</div>
      <p>
        <i class="fa fa-clock-o"></i>{{preview.time}}</p>
      <p>
        <i class="fa fa-eye"></i>阅读（{{preview.read}}）</p>
      <p class="label">
        <i class="fa fa-bookmark"></i>{{preview.label}}
      </p>
    </div>
    <div class="message">{{preview.message}}</div>
    <div class="info" v-html="showMarkdown">{{preview.info}}</div>
    <div class="push">
      <button @click="goback">返回</button>
      <button @click="pushList">提交</button>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  props: ['blog', 'show'],
  data () {
    return {
      showone: '',
      preview: {}
    }
  },
  computed: {
    showMarkdown: function () {
      let info = marked(this.preview.info, { sanitize: true })
      return info
    }
  },
  created () {
    this.preview = this.blog
    this.preview.read = '1'
    let now = new Date().toLocaleDateString().replace('/', '-').replace('/', '-')
    this.preview.time = now
  },
  methods: {
    goback () {
      this.show = this.show
      this.showone = false
      this.$emit('showNow', this.showone)
    },
    pushList () { }
  }
}
</script>

<style lang="scss" scoped>
.preview-now {
  position: absolute;
  top: 0;
  left: 0;
  padding: 2vw 2%;
  min-height: 70vh;
  width: 96%;
  background-color: #fff;
  font-size: 20px;
  .push {
    text-align: center;
    button {
      padding: 1vw 3vw;
      border: none;
      border-radius: 2px;
      background-color: #2d8cf0;
      color: #fff;
      font-size: 1.2vw;
      line-height: 1;
      &:first-child {
        margin-right: 2vw;
        background-color: #fc9;
      }
    }
  }
}
.intro {
  padding-bottom: 2%;
  border-bottom: 1px solid #eee;
  text-align: center;
  .title {
    margin-bottom: 2%;
    font-size: 30px;
  }
  img {
    width: 100%;
    height: 100px;
  }
  p {
    display: inline-block;
    margin: 0 2%;
    color: #999;
    font-size: 14px;
    i {
      margin-right: 4px;
    }
  }
  .label {
    color: #9cc;
  }
}
.info,
.message {
  margin: 2% 0;
  text-indent: 2em;
  font-size: 14px;
  line-height: 1.5;
}
</style>
