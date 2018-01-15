<template>
  <div class="redact">
    <back-btn></back-btn>
    <ul>
      <li>
        <p>标题：</p>
        <input type="text" v-model="redact.title" name="title">
      </li>
      <li>
        <p>标签：</p>
        <input type="text" v-model="redact.label" name="label">
      </li>
      <li>
        <p>封面：</p>
        <img-input :imgVal="redact.cover" @imgInput="addcover" name="cover"></img-input>
      </li>
      <li>
        <p>简介：</p>
        <textarea v-model="redact.message" name="message"></textarea>
      </li>
      <li>
        <p>内容：</p>
        <textarea class="markdown" v-model="redact.info" name="info"></textarea>
      </li>
      <li>
        <p></p>
        <button @click="pushList">提交</button>
      </li>
    </ul>
  </div>
</template>

<script>
import backBtn from 'components/modules/backBtn'
import imgInput from 'components/modules/imgInput'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    backBtn,
    imgInput
  },
  computed: {
    ...mapGetters([
      'redact'
    ])
  },
  methods: {
    addcover (data) {
      this.$store.state.redact.cover = data
    },
    ...mapActions([
      'pushList',
      'isTab'
    ])
  },
  created () {
    this.isTab()
  },
  watch: {
    '$route': 'isTab'
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
      text-align: center;
      font-size: 1.2vw;
      line-height: 2;
    }
    input,
    textarea {
      box-sizing: border-box;
      padding: 0.6vw 1vw;
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
  }
  .markdown {
    height: 26vh;
  }
}
</style>
