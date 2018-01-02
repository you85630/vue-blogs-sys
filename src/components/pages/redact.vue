<template>
  <div class="redact">
    <back-btn></back-btn>
    <ul>
      <li>
        <p>标题：</p>
        <input type="text" v-model="redact.title">
      </li>
      <li>
        <p>标签：</p>
        <input type="text" v-model="redact.label">
      </li>
      <li>
        <p>封面：</p>
        <img-input :imgVal="redact.cover" @imgInput="addcover"></img-input>
      </li>
      <li>
        <p>简介：</p>
        <textarea v-model="redact.message"></textarea>
      </li>
      <li>
        <p>内容：</p>
        <textarea class="markdown" v-model="redact.info"></textarea>
      </li>
      <li>
        <p></p>
        <button class="look" @click="lookNow">预览</button>
      </li>
    </ul>
    <preview-now :show="preview" @showNow="show" :blog="redact"></preview-now>
  </div>
</template>

<script>
import backBtn from 'components/common/backBtn'
import imgInput from 'components/common/imgInput'
import previewNow from 'components/common/previewNow'

import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      preview: false
    }
  },
  computed: {
    ...mapGetters([
      'redact'
    ])
  },
  components: {
    backBtn,
    imgInput,
    previewNow
  },
  methods: {
    addcover (data) {
      this.redact.cover = data
    },
    show (data) {
      this.preview = data
    },
    lookNow () {
      this.preview = true
    }
  }
}
</script>

<style lang="scss" scoped>
.redact {
  position: relative;
  padding: 2vw;
}
ul {
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.2vw;
    p {
      width: 20%;
      font-size: 1.2vw;
      line-height: 2;
      text-align: center;
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
    .look {
      padding: 1vw 3vw;
      border: none;
      border-radius: 2px;
      background-color: #2d8cf0;
      color: #fff;
      font-size: 1.2vw;
      line-height: 1;
    }
  }
  .markdown {
    height: 20vh;
  }
}
</style>
