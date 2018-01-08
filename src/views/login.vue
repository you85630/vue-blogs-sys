<template>
  <div class="login">
    <ul class="container">
      <li>
        账号：<input type="text" v-model="login.username">
      </li>
      <li>
        密码：<input type="text" v-model="login.password">
      </li>
      <li>
        <button @click="logIn">登录</button>
      </li>
      <li v-if="msg">
        <i class="fa fa-info-circle"></i>
        <p>{{msg}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'login',
      'msg'
    ])
  },
  methods: {
    ...mapActions([
      'logIn'
    ])
  }
}
</script>

<style lang="scss" scoped>
.login {
  background-color: #1c2438;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.container {
  border-radius: 4px;
  color: #fff;
  width: 30vw;
  height: 20vw;
  padding: 2vw;
  background-color: #495060;
  li {
    font-size: 1vw;
    text-align: center;
    margin-top: 3vw;
    button {
      width: 77%;
      padding: 0.6vw 0;
      border: none;
      background-color: #2d8cf0;
      color: #fff;
      font-size: 1.2vw;
    }
    input {
      font-size: 1vw;
      width: 62%;
      padding: 0.6vw;
    }
    i,
    p {
      display: inline-block;
      vertical-align: middle;
    }
    i {
      color: #f00;
    }
    p {
      text-align: center;
      color: #f00;
      font-size: 0.6vw;
    }
  }
}
</style>
