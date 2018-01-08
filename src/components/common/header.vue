<template>
  <ul class="header">
    <li>123</li>
    <li>
      <router-link to="/sys/login">退出</router-link>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  padding: 0 2vw;
  height: 6vh;
  background-color: #495060;
  line-height: 6vh;
  li {
    color: #fff;
    font-size: 0.8vw;
    cursor: pointer;
    a {
      margin: 0 1vw;
      padding: 0 1vw;
      border-left: 2px solid #ccc;
      color: #fff;
      font-size: 0.9vw;
    }
  }
}
</style>
